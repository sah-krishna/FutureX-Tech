'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including web development, UI/UX design, branding, and digital marketing solutions tailored to your business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A typical website project takes 2-4 weeks, while larger applications may take 4-12 weeks. We'll provide a detailed timeline during consultation."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and transparent. We offer different packages starting from $2,500 for basic websites. Custom solutions are priced based on specific requirements."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide ongoing support and maintenance services. We offer different support packages to ensure your digital presence remains optimal."
  },
  {
    question: "How do you handle revisions?",
    answer: "We include multiple revision rounds in our process to ensure your complete satisfaction. Additional revisions can be accommodated based on project needs."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-white/10 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5"
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
} 