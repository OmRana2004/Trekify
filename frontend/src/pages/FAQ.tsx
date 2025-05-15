// src/pages/FAQ.tsx
import { useState, useRef } from "react";

const faqs = [
  {
    question: "What is included in the trek?",
    answer: "All trek packages include accommodation, food, and a guide.",
  },
  {
    question: "How do I book a trek?",
    answer:
      'You can book a trek directly on our website by clicking the "Book Now" button on each trek or package.',
  },
  {
    question: "Are there any age restrictions?",
    answer:
      "We recommend treks for individuals aged 18-50. However, some treks may have different age requirements.",
  },
  // Add more FAQs here
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 pt-20 font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-green-700 tracking-wide leading-tight">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-green-50 hover:bg-green-100 transition-colors focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
              id={`faq-toggle-${index}`}
            >
              <span className="text-lg font-semibold text-green-800">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              id={`faq-${index}`}
              role="region"
              aria-labelledby={`faq-toggle-${index}`}
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="px-6 pb-6 text-gray-700 text-base overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{
                maxHeight:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
