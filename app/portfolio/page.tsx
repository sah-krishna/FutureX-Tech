import Image from 'next/image';
import PortfolioGallery from '@/app/components/PortfolioGallery';
import Button from '@/app/components/ui/Button';
import BookAppointment from '../components/BookAppointment';
import FAQ from '../components/FAQ';
import SectionHeader from '../components/ui/SectionHeader';

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] relative">
        <div className="max-w-7xl  mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-32">
          {/* Tag */}
          <div className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 mb-8">
            <span>2025</span>
            <span className="mx-2">•</span>
            <span>Explore Our Portfolio</span>
          </div>

          {/* Main Title */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
              <span className="text-white">Check Out Some</span>
              <br />
              <span className="text-gray-500">Extra-Ordinary Work.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              From startups to established brands, we create
              tailored solutions that drive success and make a real impact.
            </p>
            <Button href="/contact">Build Your Product</Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <PortfolioGallery variant="grid" />
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
  title: 'Portfolio - FutureX Tech',
  description: 'Explore our portfolio of successful digital projects and solutions that have helped businesses grow.',
}; 