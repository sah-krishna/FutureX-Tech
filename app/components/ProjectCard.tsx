interface ProjectCardProps {
  location: string;
  company: string;
  isFresh?: boolean;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  image: string;
}

export default function ProjectCard({ location, company, isFresh, description, stats, image }: ProjectCardProps) {
  return (
    <div className="w-[400px] flex-shrink-0 mx-6">
      <div className="rounded-2xl overflow-hidden bg-gray-900/50 border border-white/5 hover:border-white/10 transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={company}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Location and Company */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-white">{location}</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">{company}</span>
              {isFresh && (
                <span className="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
                  FRESH
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6">{description}</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex-1">
                <div className="text-lg font-semibold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 