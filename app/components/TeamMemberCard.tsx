'use client';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  twitterUrl?: string;
  blurRole?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Daniel Reed",
    role: "Co-Founder, CEO",
    image: "/about-poster.avif",
    twitterUrl: "https://twitter.com"
  },
  {
    id: 2,
    name: "James Turner",
    role: "Developer, Tech Lead",
    image: "/about-poster.avif",
    twitterUrl: "https://twitter.com"
  },
  {
    id: 3,
    name: "Michael Carter",
    role: "Marketing, Organizer",
    image: "/about-poster.avif",
    twitterUrl: "https://twitter.com"
  },
  {
    id: 4,
    name: "William Scott",
    role: "Creative Director",
    image: "/about-poster.avif",
    twitterUrl: "https://twitter.com",
    blurRole: true
  },
  {
    id: 5,
    name: "Ethan Mitchell",
    role: "UI/UX Designer",
    image: "/about-poster.avif",
    twitterUrl: "https://twitter.com",
    blurRole: true
  },
  {
    id: 6,
    name: "Isabella Hughes",
    role: "Project Manager",
    image: "/about-poster.avif",
    twitterUrl: "https://twitter.com",
    blurRole: true
  }
];

export default function TeamMemberCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member) => (
        <div 
          key={member.id}
          className="group relative rounded-2xl overflow-hidden bg-[#030711] border border-white/5"
        >
          {/* Image Container */}
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm ${member.blurRole ? 'blur-sm' : ''} text-gray-400`}>
                  {member.role}
                </p>
              </div>
              {member.twitterUrl && (
                <Link 
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#030711]/80 hover:bg-blue-500/20 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 text-blue-400" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 