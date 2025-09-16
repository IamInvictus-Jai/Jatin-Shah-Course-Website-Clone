import React, { useState } from "react";
import { faqData } from "../data/faqData";

const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className={`w-5 h-5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section>
      <div className="py-8 mb-20 md:mb-0 md:py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-xl text-center mt-4 max-w-2xl mx-auto">
            We have answered all common questions below. For any further
            queries, please contact: support@brainaspire.com
          </p>

          <div className="mt-8 space-y-4">
            {faqData.map((faq) => {
              const isOpen = openFAQ === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex justify-between items-center w-full p-4 bg-sky-950 text-white font-semibold text-left text-lg"
                  >
                    <span>{faq.question}</span>
                    <ChevronIcon isOpen={isOpen} />
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 text-sky-950 bg-white leading-relaxed">
                      {faq.answer.includes("<ul") ? (
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
