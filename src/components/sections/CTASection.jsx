import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function CTASection() {
  return (
    <section className="section bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your network?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Get a free consultation and site survey. Let's discuss how we can improve your infrastructure.</p>
        <Button variant="secondary" size="lg" as={Link} to="/contact">Consultation Gratis</Button>
      </div>
    </section>
  );
}
