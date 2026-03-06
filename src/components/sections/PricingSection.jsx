import { useState } from 'react';
import { Check } from 'lucide-react';
import Button from '../common/Button';
import { pricing } from '../../data';

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section bg-white dark:bg-dark-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Choose the package that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, idx) => (
            <div key={plan.id} className={`card p-8 ${plan.id === 2 ? 'border-2 border-blue-600 relative' : ''}`}>
              {plan.id === 2 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                {plan.period && <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.id === 2 ? 'primary' : 'secondary'} className="w-full" as="a" href="/contact">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
