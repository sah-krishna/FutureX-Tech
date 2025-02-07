import Image from 'next/image';
import ContactForm from '@/app/components/ContactForm';
import SectionHeader from '@/app/components/ui/SectionHeader';
import FAQ from '../components/FAQ';
import BookAppointment from '../components/BookAppointment';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-32">
          {/* Tag */}
          <div className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 mb-8">
            <span>24/7</span>
            <span className="mx-2">•</span>
            <span>Let's Work Together</span>
          </div>

          {/* Main Title */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
              <span className="text-white">Any Questions Rising?</span>
              <br />
              <span className="text-gray-500">We are All Here.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Whether you have a question, need assistance,
              or want to start a new project, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Side - Form */}
            <div className="lg:w-2/3">
              <SectionHeader title="Get in Touch" className="mb-8" />
              <ContactForm />
            </div>

            {/* Right Side - Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    Email: hello@futurextech.com
                  </p>
                  <p className="text-gray-400">
                    Phone: +1 (555) 123-4567
                  </p>
                  <p className="text-gray-400">
                    Address: 123 Innovation Street, Tech Valley, CA 94043
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <SectionHeader title="FAQ" />
            <h2 className="text-4xl md:text-5xl font-medium mt-8">
              <span className="text-white">Frequently Asked Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>
      <BookAppointment/>
      
    </>
  );
}

export const metadata = {
  title: 'Contact Us - FutureX Tech',
  description: 'Get in touch with FutureX Tech. We\'re here to answer your questions and help bring your ideas to life.',
}; 