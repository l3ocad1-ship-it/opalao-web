/*
 * OPALAO Home Page — Versión Viva
 * Orden de secciones:
 * 01 Hero → 02 Philosophy Strip → 03 Pain Points → 04 Services → 05 About
 * → 06 Gallery → 07 Retreats → 08 Products → 09 Blog → 10 FAQ → 11 Booking
 * → 12 Testimonials (antes del footer) → 13 Contact/Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophyStrip from "@/components/PhilosophyStrip";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import RetreatsSection from "@/components/RetreatsSection";
import ProductsSection from "@/components/ProductsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import PageButterflies from "@/components/PageButterflies";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#F6F1E7" }}>
      <Navbar />
      <PageButterflies />
      <HeroSection />
      <PhilosophyStrip />
      <PainPointsSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <RetreatsSection />
      <ProductsSection />
      <BlogSection />
      <FAQSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppBubble />
    </div>
  );
}
