import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600',
    secondary: 'bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600',
    ghost: 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
  };
  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </motion.button>
  );
}
