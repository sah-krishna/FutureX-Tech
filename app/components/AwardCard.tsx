'use client';
import Image from 'next/image';

interface Award {
  id: number;
  logo: string;
  title: string;
  subtitle: string;
  count: string;
}

const awards: Award[] = [
  {
    id: 1,
    logo: "/framer-logo.svg",
    title: "CSS Design Awards",
    subtitle: "Site Of The Day",
    count: "16x"
  },
  {
    id: 2,
    logo: "/awwwards-logo.svg",
    title: "Awwwards",
    subtitle: "Site Of The Year",
    count: "18x"
  },
  {
    id: 3,
    logo: "/ipsum-logo.svg",
    title: "Red Dot Design",
    subtitle: "Best Of The Year",
    count: "07x"
  },
  {
    id: 4,
    logo: "/bogo-logo.svg",
    title: "Framer Awards",
    subtitle: "Site Of The Month",
    count: "12x"
  }
];

export default function AwardCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {awards.map((award) => (
        <div 
          key={award.id}
          className="bg-[#030711] rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors"
        >
          <div className="h-12 mb-4">
            <Image
              src={award.logo}
              alt={award.title}
              width={120}
              height={48}
              className="h-full w-auto"
            />
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-lg font-semibold text-white">{award.title}</h3>
              <p className="text-sm text-gray-400">{award.subtitle}</p>
            </div>
            <span className="text-lg font-semibold text-gray-400">{award.count}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 