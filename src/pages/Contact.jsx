import { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { contactInfo } from '../data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', needs: '', location: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name required';
    if (!form.email.trim()) newErrors.email = 'Email required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.needs.trim()) newErrors.needs = 'Please describe your needs';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', needs: '', location: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 section bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-900 dark:to-dark-800">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to discuss your networking project? Fill out the form below or reach us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info - Enhanced with icons */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card p-6 bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    📞
                  </span>
                  Contact Info
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Address</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{contactInfo.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-blue-600 dark:text-blue-400 text-sm hover:underline">{contactInfo.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Phone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-600 dark:text-blue-400 text-sm hover:underline">{contactInfo.phone}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Hours</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{contactInfo.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust Badge */}
              <div className="card p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <h4 className="font-bold text-lg mb-2">24x7 Support Available</h4>
                <p className="text-blue-100 text-sm">Our team is ready to assist you with any networking questions.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 md:p-10 bg-white dark:bg-gray-800 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-7xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                    <Button variant="primary" onClick={() => setSubmitted(false)}>Send Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <Input label="Full Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} error={errors.name} />
                      <Input label="Email *" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} error={errors.email} />
                      <Input label="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                      <Input label="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Project Needs *</label>
                      <textarea rows={6} required className="input resize-none" value={form.needs} onChange={e => setForm({ ...form, needs: e.target.value })} placeholder="Describe your networking project, requirements, and any specific challenges..." />
                      {errors.needs && <p className="mt-2 text-sm text-red-500">{errors.needs}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 dark:text-gray-400">* Required fields</p>
                      <Button type="submit" variant="primary" size="lg">Send Message</Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
