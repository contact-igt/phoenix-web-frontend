"use client";

import React, { useState, useRef } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "I'm a complete beginner. Can I still join Hyperfit?",
    answer: "Absolutely! Our trainers and community are welcoming to all fitness levels, and we provide scalable workouts to help you get started safely."
  },
  {
    question: "Do I need to bring anything for my first session?",
    answer: "Just comfortable workout clothes, indoor training shoes, a water bottle, and a small towel."
  },
  {
    question: "Are personal training sessions included in the plans?",
    answer: "Personal training is an additional service tailored to individual goals, though basic plans do include an initial consultation."
  },
  {
    question: "What kind of group classes do you offer?",
    answer: "We offer a variety of classes including HIIT, functional strength training, yoga, and boxing."
  },
  {
    question: "Can I freeze or pause my membership if needed?",
    answer: "Yes, you can pause your membership for up to 3 months per calendar year due to medical reasons or travel."
  },
  {
    question: "How do I cancel my membership?",
    answer: "You can cancel your membership by providing a 30-day written notice through our support email or at the front desk."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '50%', width: '24px', height: '24px' }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </div>
            <div
              className="faq-answer-wrapper"
              style={{
                maxHeight: isOpen ? "200px" : "0px",
                transition: "max-height 0.3s cubic-bezier(0, 1, 0, 1)"
              }}
            >
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
