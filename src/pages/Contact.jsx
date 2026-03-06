import { useState } from 'react';
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
    // auto hide after 3s
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Ready to discuss your networking project? Fill out the form below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white w-24">Address:</span>
                    <span>{contactInfo.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white w-24">Email:</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-600 dark:text-blue-400">{contactInfo.email}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white w-24">Phone:</span>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600 dark:text-blue-400">{contactInfo.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-gray-900 dark:text-white w-24">Hours:</span>
                    <span>{contactInfo.hours}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Full Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} error={errors.name} />
                      <Input label="Email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} error={errors.email} />
                      <Input label="Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                      <Input label="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Needs</label>
                      <textarea rows={5} required className="input" value={form.needs} onChange={e => setForm({ ...form, needs: e.target.value })} placeholder="Describe your project..." />
                      {errors.needs && <p className="mt-1 text-sm text-red-500">{errors.needs}</p>}
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
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
