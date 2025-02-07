import Image from 'next/image';
import VideoPlayer from '@/app/components/VideoPlayer';
import TeamMemberCard from '@/app/components/TeamMemberCard';
import AwardCard from '@/app/components/AwardCard';
import ToolCard from '@/app/components/ToolCard';
import SectionHeader from '@/app/components/ui/SectionHeader';
import Button from '@/app/components/ui/Button';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Video */}
      <section className="min-h-screen relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-32">
          {/* Tag */}
          <div className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 mb-8">
            <span>2025</span>
            <span className="mx-2">•</span>
            <span>Dig Deep About Us</span>
          </div>

          {/* Main Title */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
              <span className="text-white">Learn More About Landin</span>
              <br />
              <span className="text-gray-500">Let's Deep Dive!</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Landin is your go-to agency for creative thinking and
              marketing ideas. We specialize in digital business solutions.
            </p>
            <div className="flex gap-4">
              <Button href="/contact">Connect With Us</Button>
              <Button href="/about" className="bg-transparent border border-white/10">
                What is Landin?
              </Button>
            </div>
          </div>

          {/* Video Player */}
          <div className="mt-20">
            <VideoPlayer 
              thumbnailUrl="/about-poster.avif"
              videoUrl="https://youtu.be/-qD3KOfBjZE"
            />
          </div>
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>

      {/* Agency Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/about-poster.avif"
                  alt="Agency Image"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 space-y-6">
              {/* <div className="inline-flex items-center rounded-lg bg-[#030711] px-3 py-2 text-sm text-white">
                About Landin
              </div> */}
              <SectionHeader className='mb-10' title="About Landin" />
              <h2 className="text-4xl lg:text-5xl font-medium">
                <span className="text-white">An Agency With Classic</span>
                <br />


                <span className="text-gray-500">Revolutionary Skills!</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Your Success, Our Priority</h3>
                  <p className="text-gray-400">
                    At Landin, we believe in empowering our clients to achieve their goals.
                    Our team works closely with you.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Partners You Can Rely On</h3>
                  <p className="text-gray-400">
                    Landin is here to ensure your success with expert guidance and
                    collaborative teamwork.
                  </p>
                </div>
              </div>
              <Button href="/contact">Book an Appointment</Button>
            </div>
          </div>
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>

      {/* Work Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Right Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/about-poster.avif"
                  alt="Work Process"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6">
              <SectionHeader className="mb-10" title="About Landin" />
              <h2 className="text-4xl lg:text-5xl font-medium">
                <span className="text-white">Work Smarter Not Harder</span>
                <br />
                <span className="text-gray-500">in Every Minutes!</span>

              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Guided Every Step</h3>
                  <p className="text-gray-400">
                    We ensure a smooth journey from concept to completion, providing
                    expert support to bring your vision to life effortlessly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Support Beyond Delivery</h3>
                  <p className="text-gray-400">
                    Our commitment doesn't end at launch—Landin is here to support you
                    with ongoing updates and expertise whenever you need it.
                  </p>
                </div>
              </div>
              <Button href="/contact">Book an Appointment</Button>
            </div>
          </div>
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <SectionHeader className="mb-10" title="Team Members" />
            <h2 className="text-4xl lg:text-5xl font-medium mb-6">
              <span className="text-white">Meet the Team Making</span>
              <br />
              <span className="text-gray-500">Things Happen Every Day</span>

            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our team is made up of passionate professionals who bring their
              expertise and creativity to every project.
            </p>
          </div>
          <TeamMemberCard />
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>

      {/* Awards Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <SectionHeader className="mb-10" title="Awards" />
                <h2 className="text-4xl lg:text-5xl font-medium mb-6">
                  <span className="text-white">Awards</span>
                  <br />
                  <span className="text-gray-500">& Recognition</span>

                </h2>
                <p className="text-gray-400">
                  We're proud to have been recognized with several
                  awards for our hard work and dedication.
                </p>
              </div>
            </div>
            <div className="lg:w-2/3">
              <AwardCard />
            </div>
          </div>
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>

      {/* Tools Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <SectionHeader className="mb-10" title="Tools" />
            <h2 className="text-4xl lg:text-5xl font-medium mb-6">
              <span className="text-white">Tools and Technologies</span>
              <br />
              <span className="text-gray-500">Powering Our Productivity</span>

            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Our toolkit is made up of the latest and most reliable tech to ensure
              your project is executed to perfection.
            </p>
            <Button href="/contact">Book an Appointment</Button>
          </div>
          <div className="mt-16">
            <ToolCard />
          </div>
        </div>
      </section>
      {/* hr line */}
      <div className="hr"></div>
    </>
  );
}

export const metadata = {
  title: 'About Us - FutureX Tech',
  description: 'Learn more about FutureX Tech, our team, awards, and the tools we use to deliver exceptional digital solutions.',
}; 