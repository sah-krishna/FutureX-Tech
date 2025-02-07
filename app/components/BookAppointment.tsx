'use client';
import { useState } from 'react';
import SectionHeader from './ui/SectionHeader';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

const services = [
  "Website Development",
  "UI/UX Design",
  "Digital Marketing",
  "Brand Strategy",
  "SEO Optimization",
  "App Development"
];

export default function BookAppointment() {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side - Form */}
          <div className="lg:w-2/3">
            <div className="text-center lg:text-left mb-12">
              <SectionHeader title="Book an Appointment" className="mb-6" />
              <h2 className="text-4xl lg:text-5xl font-medium mb-6">
                <span className="text-white">Schedule a Meeting</span>
                <br />
                <span className="text-gray-500">With Our Experts.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">
                Book a free consultation to discuss your project and explore how we can help bring your vision to life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#030711] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#030711] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Phone & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#030711] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#030711] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    className="w-full px-4 py-3 rounded-lg bg-[#030711] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#030711] border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              >
                Book Your Appointment
              </button>
            </form>
          </div>

          {/* Right Side - Information */}
          <div className="lg:w-1/3 space-y-8">
            <div className="rounded-2xl border border-white/10 p-6 bg-[#030711]">
              <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <p className="text-gray-400">15-30 minute initial consultation</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <p className="text-gray-400">Discussion of your project requirements</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <p className="text-gray-400">Overview of our process and timeline</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <p className="text-gray-400">Initial pricing and proposal discussion</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 