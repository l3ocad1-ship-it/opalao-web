<?php
/**
 * Opalao — receptor del formulario de "Agendar sesión".
 * Recibe los datos (JSON) desde BookingSection y envía un correo a la bandeja.
 * Requiere que la cuenta de correo del destinatario exista en Hostinger.
 */

header('Content-Type: application/json; charset=utf-8');

// ── Destino: a dónde llegan las solicitudes ──
$DESTINO = 'contact@opalaohealing.com';
// Remitente: DEBE ser una cuenta del dominio que exista en Hostinger.
$REMITENTE = 'contact@opalaohealing.com';

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
  exit;
}

// Leer datos (JSON o, como respaldo, form-encoded)
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) { $data = $_POST; }

// Honeypot anti-spam: si el campo oculto viene lleno, es un bot → fingir éxito y salir
if (!empty($data['website'])) { echo json_encode(['ok' => true]); exit; }

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');

// Validación mínima
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $service === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Datos incompletos o correo inválido']);
  exit;
}

// Evitar inyección de encabezados
$safeName  = preg_replace('/[\r\n]+/', ' ', $name);
$safeEmail = preg_replace('/[\r\n]+/', '', $email);

// Asunto (codificado para acentos)
$subjectRaw = 'Nueva solicitud de agenda — ' . $service;
$subject = '=?UTF-8?B?' . base64_encode($subjectRaw) . '?=';

// Cuerpo del correo
$body  = "Nueva solicitud desde opalaohealing.com\n";
$body .= "----------------------------------------\n\n";
$body .= "Nombre:             $name\n";
$body .= "Correo:             $email\n";
$body .= "Teléfono/WhatsApp:  " . ($phone !== '' ? $phone : '(no proporcionado)') . "\n";
$body .= "Servicio de interés: $service\n\n";
$body .= "Mensaje:\n" . ($message !== '' ? $message : '(sin mensaje)') . "\n";

// Encabezados: From = cuenta del dominio (para SPF); Reply-To = visitante
$headers  = "From: Opalao Web <$REMITENTE>\r\n";
$headers .= "Reply-To: $safeName <$safeEmail>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$ok = @mail($DESTINO, $subject, $body, $headers, "-f$REMITENTE");

if ($ok) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'No se pudo enviar el correo']);
}
