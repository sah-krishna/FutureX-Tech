'use client';
import Button from "@/app/components/ui/Button";

export default function Features() {
  return (
    <section className="relative min-h-[90vh] flex items-center ">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] bottom-0 w-[60%] h-[70%] bg-blue-950/20 blur-3xl transform -skew-x-12" />
        <div className="absolute -right-[10%] bottom-0 w-[60%] h-[70%] bg-blue-950/20 blur-3xl transform skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 text-center">
        {/* Features Tag */}
        <div className="inline-flex items-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm text-blue-300 mb-8">
          <ul className="list-disc list-inside">
            <li>Features</li>
          </ul>
        </div>

        {/* Main Title */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium ">
            <span className="text-white">Unlimited Design Features</span>
            <br />
            <span className="text-gray-500">Delivered In A Second!</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Get unlimited design features that give you the freedom
            to create without boundaries.
          </p>

          <Button href="/about" className="shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
            View About Futurex Tech
          </Button>
        </div>
      </div>
    </section>
  );
} 