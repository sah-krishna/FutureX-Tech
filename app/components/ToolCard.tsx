'use client';
import Image from 'next/image';

interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  isPro?: boolean;
}

const tools: Tool[] = [
  {
    id: 1,
    name: "Zapier",
    category: "Automation",
    description: "Zapier connects your favorite apps and automates your workflows.",
    logo: "/zapier-logo.svg",
    isPro: true
  },
  {
    id: 2,
    name: "Slack",
    category: "Communication",
    description: "Slack is our go-to platform for real-time communication and collaboration.",
    logo: "/slack-logo.svg"
  },
  {
    id: 3,
    name: "Dropbox",
    category: "Cloud Storage",
    description: "Dropbox provides secure cloud storage, enabling us to share files and collaborate.",
    logo: "/dropbox-logo.svg"
  },
  {
    id: 4,
    name: "Stripe",
    category: "Payments",
    description: "Stripe is our payment processing tool, providing a secure way to transactions.",
    logo: "/stripe-logo.svg"
  },
  {
    id: 5,
    name: "Mailchimp",
    category: "Email Marketing",
    description: "Mailchimp helps us craft effective email marketing campaigns to nurture clients.",
    logo: "/mailchimp-logo.svg",
    isPro: true
  },
  {
    id: 6,
    name: "Github",
    category: "Version Control",
    description: "GitHub is our version control system, enabling smooth collaboration.",
    logo: "/github-logo.svg"
  }
];

export default function ToolCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <div 
          key={tool.id}
          className="bg-[#030711] rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  {tool.isPro && (
                    <span className="px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                      PRO
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400">{tool.category}</p>
              </div>
            </div>
            <svg 
              className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p className="text-gray-400 text-sm">{tool.description}</p>
        </div>
      ))}
    </div>
  );
} 