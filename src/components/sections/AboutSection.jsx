import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, ThumbsUp } from 'lucide-react';

export default function AboutSection() {
  const strengths = [
    { icon: CheckCircle, title: 'SLA Guaranteed', desc: 'We stand by our uptime and response commitments.' },
    { icon: Award, title: 'Certified Team', desc: 'Cisco, Mikrotik, and fiber optic certified engineers.' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'Projects delivered on time, every time.' },
    { icon: ThumbsUp, title: 'Quality First', desc: 'We use only premium components and test rigorously.' }
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Sinar Jaringan?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              With over a decade of experience, we have helped hundreds of companies—from startups to enterprises—build robust, scalable, and secure network infrastructures.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700 flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 text-9xl opacity-20">SJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
