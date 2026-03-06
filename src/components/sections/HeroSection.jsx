import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Award, Users } from 'lucide-react';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Reliable Networking Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern Businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            From fiber optics to secure remote access, we design, build, and maintain enterprise-grade networks that keep your business connected and secure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" as={Link} to="/contact">Request Survey</Button>
            <Button variant="secondary" size="lg" as={Link} to="/services">View Services</Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              { icon: CheckCircle, title: 'Certified Engineers', desc: 'Cisco, Mikrotik, Fiber certified' },
              { icon: Clock, title: 'Rapid Response', desc: 'SLA within 4 hours' },
              { icon: Award, title: 'Proven Trackrecord', desc: '200+ projects delivered' },
              { icon: Users, title: 'Dedicated Support', desc: '24x7 helpdesk available' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
