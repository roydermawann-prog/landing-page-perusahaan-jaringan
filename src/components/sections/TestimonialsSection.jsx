import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Card from '../common/Card';
import { testimonials } from '../../data';

export default function TestimonialsSection() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">"{t.content}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
