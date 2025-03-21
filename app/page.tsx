import HeroSection from "@/components/hero-section"
import IntroSection from "@/components/intro-section"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import TestimonialCarousel from "@/components/testimonial-carousel"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/ui/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialCarousel />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}

