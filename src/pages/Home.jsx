import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ProcessSection from '../components/sections/ProcessSection';
import BlogSection from '../components/sections/BlogSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="pt-6">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ProcessSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
