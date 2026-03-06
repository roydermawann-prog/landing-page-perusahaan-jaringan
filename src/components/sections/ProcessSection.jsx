import { motion } from 'framer-motion';
import { ClipboardList, PenTool, Wrench, TestTube, Handshake, Settings } from 'lucide-react';

const steps = [
  { number: 1, title: 'Survey', desc: 'Kami kunjungi lokasi untuk analisis kebutuhan dan kondisi.', icon: ClipboardList },
  { number: 2, title: 'Design', desc: 'Rancang solusi jaringan berdasarkan hasil survey.', icon: PenTool },
  { number: 3, title: 'Install', desc: 'Tim ahli melakukan instalasi sesuai standar.', icon: Wrench },
  { number: 4, title: 'Testing', desc: 'Uji coba komprehensif sebelum handover.', icon: TestTube },
  { number: 5, title: 'Handover', desc: 'Dokumentasi lengkap dan training pengguna.', icon: Handshake },
  { number: 6, title: 'Maintenance', desc: 'Dukungan ongoing dengan SLA terjamin.', icon: Settings }
];

export default function ProcessSection() {
  return (
    <section className="section bg-white dark:bg-dark-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">From survey to maintenance — a transparent, proven workflow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
