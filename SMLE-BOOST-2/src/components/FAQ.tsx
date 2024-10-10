import React, { useState, useRef } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is SMLE BOOST?",
    answer: "SMLE BOOST is a comprehensive online platform designed to help interns prepare for the Saudi Medical Licensing Exam (SMLE). It offers a vast question bank, adaptive learning algorithms, and performance tracking tools."
  },
  {
    question: "How does the adaptive learning algorithm work?",
    answer: "Our adaptive learning algorithm analyzes your performance on practice questions and identifies areas where you need improvement. It then tailors your study plan and question sets to focus on these areas, optimizing your study time and effectiveness."
  },
  {
    question: "Is SMLE BOOST updated regularly?",
    answer: "Yes, we continuously update our question bank and content to reflect the most current SMLE exam patterns and medical knowledge. Our team of experts ensures that the information is accurate and up-to-date."
  },
  {
    question: "Can I access SMLE BOOST on mobile devices?",
    answer: "Absolutely! SMLE BOOST is fully responsive and can be accessed on smartphones, tablets, and desktop computers. Study anytime, anywhere with our mobile-friendly platform."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Yes, we offer a full refund if you score less than 90% in your SMLE exam after using our platform as explaind. We're confident in the effectiveness of our program and stand behind our promise to help you succeed."
  }
]

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-4">
      <button
        className={`flex justify-between items-center w-full text-left p-4 transition-colors duration-300 ${
          isOpen 
            ? 'bg-[#202020] text-white rounded-t-lg' 
            : 'bg-[#303030] text-[#f7f8fa] hover:bg-[#252525] rounded-lg'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#acc56a]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#acc56a]" />
        )}
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out bg-[#202020] rounded-b-lg"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0' }}
      >
        <p className="p-4 text-[#f7f8fa]">{answer}</p>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-[#f7f8fa]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#202020] animate-fade-in-down">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ