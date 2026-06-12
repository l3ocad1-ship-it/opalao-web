/*
 * OPALAO Language Context — ES / EN toggle
 * Provides translations for all site sections
 */
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

export interface Translations {
  nav: {
    inicio: string;
    servicios: string;
    sobre: string;
    retiros: string;
    tienda: string;
    blog: string;
    reservar: string;
    reservarSesion: string;
  };
  hero: {
    badge: string;
    h1a: string;
    h1b: string;
    h1c: string;
    tagline: string;
    cta1: string;
    cta2: string;
    scroll: string;
  };
  philosophy: {
    label: string;
    pillars: { numeral: string; text: string; tagline: string }[];
  };
  painPoints: {
    label: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    items: { title: string; detail: string }[];
    cta: string;
  };
  about: {
    label: string;
    title: string;
    titleItalic: string;
    p1: string;
    p2: string;
    cta: string;
  };
  services: {
    label: string;
    title: string;
    titleItalic: string;
  };
  retreats: {
    label: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    cta: string;
  };
  testimonials: {
    label: string;
    title: string;
    titleItalic: string;
  };
  booking: {
    label: string;
    title: string;
    titleItalic: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

const es: Translations = {
  nav: {
    inicio: "Inicio",
    servicios: "Servicios",
    sobre: "Sobre Opalao",
    retiros: "Retiros",
    tienda: "Tienda",
    blog: "Blog",
    reservar: "Reservar",
    reservarSesion: "Reservar Sesión",
  },
  hero: {
    badge: "Oaxaca, México · Sanación Integral",
    h1a: "Tu portal",
    h1b: "espiritual",
    h1c: "te espera.",
    tagline: "Sanación integral · Oaxaca, México",
    cta1: "Reservar",
    cta2: "Explorar",
    scroll: "Scroll",
  },
  philosophy: {
    label: "Los cuatro pilares de Opalao",
    pillars: [
      { numeral: "I", text: "Cuerpo", tagline: "Equilibrio energético" },
      { numeral: "II", text: "Mente", tagline: "Acompañamiento integral" },
      { numeral: "III", text: "Energía", tagline: "Armonización y equilibrio" },
      { numeral: "IV", text: "Espíritu", tagline: "Ceremonias y rituales conscientes" },
    ],
  },
  painPoints: {
    label: "¿Te Identificas?",
    title: "¿Te suena familiar alguna de",
    titleItalic: "estas sensaciones?",
    subtitle: "Si respondiste sí a alguna, estás en el lugar correcto.",
    items: [
      {
        title: "Sientes una carga que no logras soltar",
        detail: "Tu energía guarda emociones, memorias y procesos que tal vez ya están listos para liberarse.",
      },
      {
        title: "Tu energía pide equilibrio",
        detail: "Cuando la ansiedad, el cansancio o el vacío aparecen, puede ser una señal de que necesitas volver a tu centro.",
      },
      {
        title: "Buscas sanar desde un lugar más profundo",
        detail: "Más allá de la mente: desde el alma, el cuerpo y la energía.",
      },
      {
        title: "Sientes un llamado interno",
        detail: "Una intuición interna te guía hacia un camino de mayor claridad, equilibrio y propósito.",
      },
    ],
    cta: "Encontremos tu camino →",
  },
  about: {
    label: "Sobre Opalao",
    title: "Un espacio donde lo espiritual y",
    titleItalic: "lo terapéutico se encuentran",
    p1: "Opalao es un centro holístico en el corazón de Oaxaca, México. Fundado por Jassibe, facilitadora de sanación con años de experiencia integrando prácticas ancestrales, terapias energéticas y acompañamiento consciente.",
    p2: "Nuestro espacio es un portal de transformación donde cada sesión, ceremonia y retiro está diseñado para acompañarte en tu proceso de regreso a ti misma.",
    cta: "Conocer más",
  },
  services: {
    label: "Nuestros Servicios",
    title: "Caminos de",
    titleItalic: "sanación",
  },
  retreats: {
    label: "Retiros",
    title: "Experiencias de",
    titleItalic: "transformación profunda",
    subtitle: "Retiros en Oaxaca diseñados para reconectar con tu esencia, la naturaleza y tu propósito.",
    cta: "Ver Retiros",
  },
  testimonials: {
    label: "Testimonios",
    title: "Voces de",
    titleItalic: "transformación",
  },
  booking: {
    label: "Reservar",
    title: "Agenda tu",
    titleItalic: "sesión",
    subtitle: "Da el primer paso hacia tu transformación. Completa el formulario y nos pondremos en contacto contigo.",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu correo electrónico",
    phonePlaceholder: "Tu teléfono (opcional)",
    servicePlaceholder: "Selecciona un servicio",
    messagePlaceholder: "¿Qué te gustaría trabajar o explorar?",
    submit: "Enviar Solicitud",
  },
  contact: {
    label: "Contacto",
    title: "Conecta con Opalao",
    subtitle: "Estamos en Oaxaca, México, listos para acompañarte en tu camino de sanación.",
    address: "Oaxaca de Juárez, Oaxaca, México",
    phone: "+52 951 XXX XXXX",
    email: "hola@opalao.mx",
  },
  footer: {
    tagline: "Tu portal espiritual en Oaxaca",
    rights: "Todos los derechos reservados.",
  },
};

const en: Translations = {
  nav: {
    inicio: "Home",
    servicios: "Services",
    sobre: "About Opalao",
    retiros: "Retreats",
    tienda: "Shop",
    blog: "Blog",
    reservar: "Book",
    reservarSesion: "Book a Session",
  },
  hero: {
    badge: "Oaxaca, México · Integral Healing",
    h1a: "Your spiritual",
    h1b: "portal",
    h1c: "awaits.",
    tagline: "Integral healing · Oaxaca, México",
    cta1: "Book Now",
    cta2: "Explore",
    scroll: "Scroll",
  },
  philosophy: {
    label: "The four pillars of Opalao",
    pillars: [
      { numeral: "I", text: "Body", tagline: "Energetic balance" },
      { numeral: "II", text: "Mind", tagline: "Integral support" },
      { numeral: "III", text: "Energy", tagline: "Harmonization & balance" },
      { numeral: "IV", text: "Spirit", tagline: "Conscious ceremonies & rituals" },
    ],
  },
  painPoints: {
    label: "Do You Relate?",
    title: "Do any of these sensations",
    titleItalic: "sound familiar?",
    subtitle: "If you answered yes to any of these, you're in the right place.",
    items: [
      {
        title: "Carrying something you can't release",
        detail: "Your energy holds emotions, memories and processes that may already be ready to be freed.",
      },
      {
        title: "Looking for something deeper",
        detail: "When anxiety, exhaustion or emptiness appear, it may be a sign you need to return to your center.",
      },
      {
        title: "You know there's more",
        detail: "Beyond the mind: from the soul, the body and the energy.",
      },
      {
        title: "You want to reconnect",
        detail: "An inner intuition guides you toward a path of greater clarity, balance and purpose.",
      },
    ],
    cta: "Let's find your path →",
  },
  about: {
    label: "About Opalao",
    title: "A space where the spiritual and",
    titleItalic: "the therapeutic meet",
    p1: "Opalao is a holistic center in the heart of Oaxaca, Mexico. Founded by Jassibe, a healing facilitator with years of experience integrating ancestral practices, energy therapies and conscious accompaniment.",
    p2: "Our space is a portal of transformation where every session, ceremony and retreat is designed to accompany you on your journey back to yourself.",
    cta: "Learn more",
  },
  services: {
    label: "Our Services",
    title: "Paths of",
    titleItalic: "healing",
  },
  retreats: {
    label: "Retreats",
    title: "Experiences of",
    titleItalic: "deep transformation",
    subtitle: "Retreats in Oaxaca designed to reconnect with your essence, nature and purpose.",
    cta: "View Retreats",
  },
  testimonials: {
    label: "Testimonials",
    title: "Voices of",
    titleItalic: "transformation",
  },
  booking: {
    label: "Book",
    title: "Schedule your",
    titleItalic: "session",
    subtitle: "Take the first step toward your transformation. Fill out the form and we'll get in touch with you.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "Your phone (optional)",
    servicePlaceholder: "Select a service",
    messagePlaceholder: "What would you like to work on or explore?",
    submit: "Send Request",
  },
  contact: {
    label: "Contact",
    title: "Connect with Opalao",
    subtitle: "We are in Oaxaca, Mexico, ready to accompany you on your healing journey.",
    address: "Oaxaca de Juárez, Oaxaca, México",
    phone: "+52 951 XXX XXXX",
    email: "hola@opalao.mx",
  },
  footer: {
    tagline: "Your spiritual portal in Oaxaca",
    rights: "All rights reserved.",
  },
};

export const translations: Record<Lang, Translations> = { es, en };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
  t: es,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
