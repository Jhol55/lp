'use client';

import { useState } from 'react';
import { cn } from "@/lib/utils";

export function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-gray-50 rounded-lg mb-3 overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full px-5 py-3 flex justify-between items-center text-left font-bold text-gray-dark hover:bg-gray-100 transition-colors text-sm"
      >
        <span>{question}</span>
        <svg
          className={cn(
            "w-4 h-4 text-primary transition-transform",
            isOpen && "transform rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 py-3 text-sm text-gray-medium border-t border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
}

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
