'use client';

interface ServiceCardProps {
  icon: string;
  title: string;
  tag?: string;
  subtitle: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    icon: "$",
    title: "Boost Your Revenue",
    tag: "PRO",
    subtitle: "Increase Profits",
    description: "Unlock new revenue streams with data-driven strategies and marketing."
  },
  {
    icon: "⚡",
    title: "Customizable Assets",
    subtitle: "Editable Designs",
    description: "Easily modify and personalize design elements to fit your brand's identity."
  },
  {
    icon: "🔧",
    title: "Bug Less Development",
    subtitle: "Optimized Code",
    description: "Our bug-less development ensures that your website runs smooth and fast."
  },
  {
    icon: "🎨",
    title: "Award-Winning Designs",
    subtitle: "Recognized Design",
    description: "Our award-winning designs showcase creativity that set us apart in the industry."
  },
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    tag: "PRO",
    subtitle: "Quick Turnaround",
    description: "Ensuring your deliverables are ready when you need them, with great quality."
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    subtitle: "Responsive",
    description: "Our mobile-friendly design ensures your design looks stunning across all devices."
  }
];

function ServiceCard({ icon, title, tag, subtitle, description }: ServiceCardProps) {
  return (
    <div className="group relative bg-gray-900/50 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
      {/* Arrow Icon */}
      <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-blue-500">
          <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
        </svg>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {tag && (
            <span className="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
              {tag}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400">{subtitle}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 mb-6">
            <ul className="list-disc list-inside">
              <li>Services</li>
            </ul>
          </div>
          <h2 className="text-4xl lg:text-5xl font-medium mb-6">
            <span className="text-white">Comprehensive Solutions</span>
            <br />
            <span className="text-gray-500">For Your Digital Success</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We offer a wide range of services to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
} 