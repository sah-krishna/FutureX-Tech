'use client';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/about-poster.avif",
    review: "Working with FutureX Tech has been transformative for our business. Their attention to detail and innovative solutions helped us achieve our goals.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, DesignLab",
    image: "/about-poster.avif",
    review: "The team's expertise in UI/UX design is exceptional. They transformed our platform's user experience, resulting in a 40% increase in user engagement.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Marketing Director, GrowthCo",
    image: "/about-poster.avif",
    review: "Their strategic approach to digital solutions has significantly improved our online presence. The results have exceeded our expectations.",
    rating: 5
  },
  {
    id: 4,
    name: "David Martinez",
    role: "CTO, InnovateTech",
    image: "/about-poster.avif",
    review: "The development team's technical expertise is outstanding. They delivered a complex project on time and with excellent attention to detail.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Product Manager, SwiftApp",
    image: "/about-poster.avif",
    review: "FutureX Tech's ability to understand our vision and translate it into reality was impressive. They're true partners in our success.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Director, CreativeHub",
    image: "/about-poster.avif",
    review: "Their creative solutions and technical implementation have helped us stay ahead of the competition. Highly recommended for any digital project.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review) => (
        <div 
          key={review.id}
          className="bg-[#030711] rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={review.image}
                alt={review.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{review.name}</h3>
              <p className="text-gray-400">{review.role}</p>
            </div>
          </div>
          
          {/* Rating Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <svg 
                key={i}
                className="w-5 h-5 text-yellow-500" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-400">"{review.review}"</p>
        </div>
      ))}
    </div>
  );
} 