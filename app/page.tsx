import Image from "next/image";
import Link from "next/link";
import PlayButton from "@/app/components/PlayButton";
import Button from "@/app/components/ui/Button";
import ProjectCard from "@/app/components/ProjectCard";
import WorkSteps from '@/app/components/WorkSteps';
import Features from '@/app/components/Features';
import Services from '@/app/components/Services';
import SectionHeader from "@/app/components/ui/SectionHeader";
import PortfolioGallery from "@/app/components/PortfolioGallery";
import OurServices from '@/app/components/OurServices';
import ImageGallery from "@/app/components/ImageGallery";
import FAQ from "@/app/components/FAQ";
import Reviews from '@/app/components/Reviews';

// Project data
const projects = [
  {
    location: "London",
    company: "Raven Company Inc",
    description: "Streamlined operations, reducing costs by with our automation solutions.",
    stats: [
      { value: "25%", label: "Conversion Rates" },
      { value: "50%", label: "Reduced in CPA" }
    ],
    image: "/about-poster.avif" // Add your image path
  },
  {
    location: "Manila", 
    company: "Gotham Wonder",
    isFresh: true,
    description: "Boosted customer engagement with a digital presence and targeted campaigns.",
    stats: [
      { value: "60%", label: "Increased Traffic" },
      { value: "35%", label: "Growth in Sales" }
    ],
    image: "/about-poster.avif" // Add your image path
  },
  {
    location: "Oslo",
    company: "Sling Interactive", 
    description: "Expanded market reach to new demographic segments effectively.",
    stats: [
      { value: "40%", label: "Boost in Retention" },
      { value: "20%", label: "Market Growth" }
    ],
    image: "/about-poster.avif" // Add your image path
  },
  {
    location: "Singapore",
    company: "TechVision Labs",
    isFresh: true,
    description: "Implemented AI-driven solutions that revolutionized customer service operations.",
    stats: [
      { value: "80%", label: "Response Time" },
      { value: "45%", label: "Cost Savings" }
    ],
    image: "/about-poster.avif" // Add your image path
  }
  
];

export default function Home() {
  return (
    <>
      
        <section className="relative min-h-screen ">
          <div className="relative">
            {/* New tag */}
            <div className="pt-16 px-10 sm:px-14 md:px-16 lg:px-20  mx-auto">
              <div className="inline-flex items-center rounded-full border border-blue-500 bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                <span className="mr-2 rounded-full bg-blue-500 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white">NEW</span>
                2024 Award Winning Company
              </div>

              {/* Hero content */}
              <div className="mt-3 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
                    Imagination to
                    <br />
                    Real Solutions
                  </h1>
                  <p className="mt-6 text-lg text-gray-400 max-w-2xl">
                    We specialize in crafting unique digital presence
                    that help businesses grow and stand out in their industries.
                  </p>

                  {/* CTA Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
                    >
                      Connect With Us
                    </Link>
                    <Button href="/about">
                      View About FutureX Tech
                    </Button>
                  </div>
                </div>

                {/* Hero Image/Animation */}
                <div className="lg:w-1/3">
                  <PlayButton />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hr line */}
        <div className="hr"></div>
        {/* about section */}
        <section className="mt-5 pt-16 px-10 sm:px-14 md:px-16 lg:px-20 mx-auto mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Image */}

            <div className="lg:w-1/2">
              <div className="flex w-[500px] h-auto p-1 border border-white/20 rounded-2xl shadow-md shadow-blue-500/50">
                <Image
                  src="/about-poster.avif"
                  alt="Person working in dim lighting on laptop"
                  width={500}
                  height={300}
                  className="rounded-2xl outline outline-1 outline-white/20"
                  priority
                />
              </div>
            </div>


            {/* Text Content */}


            <div className="lg:w-1/2 space-y-8">
              <SectionHeader title="About FutureX Tech" />
              <div>
                <h2 className="text-4xl lg:text-5xl font-medium">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Building Stronger Brands
                  </span>
                  <br />
                  <span className="text-gray-400 mt-2 block">Creating Impressions!</span>
                </h2>

              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                Delivering high-quality on-demand designs with precision.
                Handle your brand effectively like never before.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                  <span className="text-gray-300 text-lg">From $0 to $500,000 in revenue</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                  <span className="text-gray-300 text-lg">47% growth in new customers</span>
                </div>
              </div>

              <Button href="/about">
                View About FutureX Tech
              </Button>
            </div>
          </div>
        </section>
{/* hr line */}
<div className="hr"></div>
        <section>
          <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-24 mt-5">
            <div className="text-center space-y-4">
              <SectionHeader title="Results" />
              <h2 className="text-4xl lg:text-5xl font-medium">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Delivering Tangible Results
                </span>
                <br />
                <span className="text-gray-400 mt-2 block">That Propel Your Success</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                By staying true to our core values, we at FutureX are committed to delivering 
                measurable data-driven results that drive your success.
              </p>
              <div className="pt-8">
                <Button href="/contact" className=" text-sm hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20">
                  Book a 15-min call
                </Button>
              </div>
            </div>

          </div>
        </section>
        <section className="flex justify-center gap-4 w-[90vw] mx-auto overflow-hidden mb-16 mt-16">
        {projects.map((card, index) => (
            <ProjectCard
              key={index}  // Added unique key prop
              location={card.location}
              company={card.company}
              description={card.description}
              stats={card.stats}
              image={card.image}
              isFresh={card.isFresh}  // Added missing isFresh prop
            />
          ))}
          </section>
{/* hr line */}
<div className="hr"></div>
        <section className="min-h-screen mb-20">
          <WorkSteps />
        </section>
{/* hr line */}
<div className="hr"></div>
        <Features />
        {/* hr line */}
        <div className="hr"></div>
        <Services />
{/* hr line */}
<div className="hr"></div>

{/* Benefits & Features Section */}
<section className="relative min-h-screen py-32">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
    <SectionHeader title="Futurex Tech Benefits" className="mb-12" />

    {/* Main Title */}
    <div className="max-w-4xl space-y-6">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
        <span className="text-white">We Just Don't Design,</span>
        <br />
        <span className="text-white">We Build.</span>
      </h2>
      <p className="text-4xl text-gray-500 font-light">
        If You Can Dream It, We Can Play It!
      </p>
    </div>

    {/* Features Grid */}
    <div className="mt-16 flex flex-wrap gap-3">
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Enhanced UX
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Boosted Conversions
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Fast Loading
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        SEO Optimized
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Customizable
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Scalable
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Increased Engagement
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Expandable
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        Secure
      </span>
      <span className="px-5 py-2.5 rounded-full bg-[#111]/80 text-gray-300 border border-white/5 hover:border-blue-500/30 transition-colors">
        User-Friendly
      </span>
      <Button href="/contact" className="bg-white text-black">
        Contact Now
      </Button>
    </div>

    {/* Feature Cards Grid */}
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Next.js Card */}
      <div className="bg-[#030711] rounded-2xl p-6 border border-white/5">
        <h3 className="text-xl font-semibold text-white mb-2">Submit Unlimited Requests</h3>
        <p className="text-gray-400 mb-6">
          Enjoy the freedom to submit unlimited requests without any restrictions. 
          Whether you need design tweaks, we're here to assist you at every step.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Book an Appointment
          </button>
          <button className="px-4 py-2 bg-[#111]/80 text-white rounded-lg border border-white/5 hover:border-blue-500/30 transition-colors">
            What is Landio?
          </button>
        </div>
      </div>

      {/* Requests & Revisions Card */}
      <div className="bg-[#030711] rounded-2xl overflow-hidden border border-white/5">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6">⚡</div>
            <div className="w-6 h-6">🍎</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white">Requests & Revisions</span>
            <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
              NEW
            </span>
          </div>
        </div>
        <div className="p-4 text-gray-400">
          Our process includes multiple rounds of requests and revisions, ensuring that your feedback is incorporated and 
          that the final product meets your expectations.
        </div>
      </div>

      {/* Quick Turnaround Card */}
      <div className="bg-[#030711] rounded-2xl p-6 border border-white/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Quick Turnaround</h3>
          <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
            NEW
          </span>
        </div>
        <p className="text-gray-400">
          We prioritize efficiency without compromising quality.
        </p>
      </div>

      {/* Publish in Seconds Card */}
      <div className="bg-[#030711] rounded-2xl p-6 border border-white/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Publish in Seconds</h3>
          <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
            NEW
          </span>
        </div>
        <p className="text-gray-400">
          We publish your site in seconds with our streamlined process.
        </p>
      </div>

      {/* References Card */}
      <div className="bg-[#030711] rounded-2xl p-6 border border-white/5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white">Worry Free Pricing</h3>
          <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
            NEW
          </span>
        </div>
        <p className="text-gray-400">
          Whether you're just starting or scaling up, our flexible pricing plans are designed to fit your needs and budget, 
          so you can get started without any financial stress.
        </p>
      </div>
    </div>
  </div>
</section>
{/* hr line */}
<div className="hr"></div>

{/* Portfolio Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
    {/* Portfolio Tag */}
    <SectionHeader title="Portfolio" className="mb-8" />

    {/* Main Title */}
    <div className="max-w-4xl space-y-6 mb-12">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
        <span className="text-white">Our Selected Projects</span>
        <br />
        <span className="text-gray-500">That Propel Your Website.</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl">
        Explore our curated work, showcasing collaborations with visionary
        clients across diverse industries.
      </p>
      <div>
        <Button href="/portfolio" className="bg-blue-600 text-white">
          View Portfolio
        </Button>
      </div>
    </div>

    {/* Portfolio Gallery */}
    <PortfolioGallery />
  </div>
</section>
{/* hr line */}
<div className="hr"></div>

{/* Our Services Section */}
<section className="min-h-screen mb-20">
  <OurServices />
</section>
{/* hr line */}
<div className="hr"></div>

{/* Launch Site Section */}
<section className="relative min-h-screen py-32">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
    <div className="text-center">
      {/* Launch Tag */}
      <SectionHeader title="Launch Your Site" className="mb-8" />

      {/* Main Title */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
          <span className="text-white">The Trusted Rise Partner</span>
          <br />
          <span className="text-gray-500">For Startups And Agencies</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get your site live in no time! With professional setup and
          expert support in an easy way.
        </p>
        <div>
          <Button href="/about" className="bg-blue-600 text-white">
            View About Futurex Tech
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* hr line */}
<div className="hr"></div>

{/* Image Gallery Section */}
<section className="py-20">
  <div className="max-w-[100vw] overflow-hidden">
    <ImageGallery />
  </div>
</section>
{/* hr line */}
<div className="hr"></div>

{/* Testimonial & Reviews Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
    <div className="text-center">
      <SectionHeader title="Testimonial" />
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mt-8">
        <span className="text-white">Customer Reviews About</span>
        <br />
        <span className="text-gray-500">Work, Usability and Design.</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
        Hear from our happy clients! See how we've helped them achieve
        their goals and create lasting impact.
      </p>
    </div>

    {/* Reviews Component */}
    <Reviews />
  </div>
</section>
{/* hr line */}
<div className="hr"></div>

{/* FAQ Section */}
<section className="py-20">
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

{/* Book Appointment Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
    <div className="text-center">
      <SectionHeader title="Book an Appointment" />
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mt-8">
        <span className="text-white">Ready to Get Started?</span>
        <br />
        <span className="text-gray-500">Let's Talk About Your Project.</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
        Schedule a free consultation to discuss your needs and how we can help bring your vision to life.
      </p>
      <div className="mt-10">
        <Button href="/contact" className="bg-blue-600 text-white">
          Book a 15-min call
        </Button>
      </div>
    </div>
  </div>
</section>
{/* hr line */}
<div className="hr"></div>

    </>
  );
}
