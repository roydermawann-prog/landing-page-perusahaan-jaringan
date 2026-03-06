import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { contactInfo } from '../../data';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SJ</span>
              </div>
              <span className="font-heading font-bold text-xl text-gray-900 dark:text-white">Sinar Jaringan</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Solusi networking profesional untuk bisnis dan institusi. Kami memadukan teknologi terdepan dengan dukungan teknis berkelanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Projects', 'About', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone size={18} />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail size={18} />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Clock size={18} />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Sinar Jaringan. All rights reserved.</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0">Built with React, Tailwind, and professionalism.</p>
        </div>
      </div>
    </footer>
  );
}
