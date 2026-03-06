import AboutSection from '../components/sections/AboutSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default function AboutPage() {
  return (
    <div className="pt-6">
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
    </div>
  );
}
