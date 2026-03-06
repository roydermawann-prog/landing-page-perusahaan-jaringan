import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg dark:shadow-xl overflow-hidden ${hover ? 'hover:shadow-xl dark:hover:shadow-2xl transition-shadow' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = '' }) {
  return <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${className}`}>{children}</h3>;
}
export function CardBody({ children, className = '' }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
