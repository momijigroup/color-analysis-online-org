"use client"

import { useState } from "react";

const faqs = [
  {
    question: "What is AI color analysis?",
    answer:
      "AI color analysis is like having a personal color expert who studies your beautiful features and finds the colors that make you look absolutely stunning! Our friendly AI looks at your skin tone, gorgeous eyes, and hair color to create a personalized color palette that celebrates your unique beauty.",
  },
  {
    question: "How does the color palette quiz work?",
    answer:
      "It's so easy and fun! You'll answer some questions about yourself (like chatting with a friend) or share a photo. Our smart AI then works its magic to create a beautiful color palette perfect for your clothes, makeup, and style - it's like getting a personal stylist!",
  },
  {
    question: "Why should I use an AI stylist for color analysis?",
    answer:
      "Our AI has learned from thousands of professional color experts and has helped over 355,000 women discover their perfect colors! It can spot the subtle details that make certain colors absolutely perfect for you, giving you professional results instantly.",
  },
  {
    question: "What is a personal color palette?",
    answer:
      "Your personal color palette is your collection of 'magic colors' - the shades that were practically made for you! These colors are chosen specifically to make your skin glow, your eyes sparkle, and your natural beauty shine through effortlessly.",
  },
  {
    question: "Can I trust online color analysis results?",
    answer:
      "Absolutely! Our AI has helped over 355,000 women find their perfect colors with amazing results. We've spent years perfecting our system to give you reliable, beautiful color recommendations that you can trust and love.",
  },
  {
    question: "Do I need to upload a photo for color analysis?",
    answer:
      "Not at all! While sharing a photo can help us give you even more personalized results, you can get amazing color recommendations just by answering our fun questions. Choose whatever feels most comfortable for you!",
  },
  {
    question: "How can knowing my best colors improve my style?",
    answer:
      "When you know your perfect colors, everything becomes easier and more fun! Shopping becomes a breeze, getting dressed feels effortless, and you'll feel confident and beautiful every single day. Your colors will work together beautifully, making you glow with confidence!",
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full bg-[#f8fafc] py-20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
          }))
        }) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        {/* Left: Heading */}
        <div className="md:w-1/3 flex-shrink-0 flex items-start justify-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight md:leading-none">
            <span className="block">Frequently</span>
            <span className="block">Asked</span>
            <span className="block">Questions</span>
          </h2>
        </div>
        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full bg-white rounded-2xl shadow-sm p-0 divide-y divide-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center text-lg font-medium text-gray-900 hover:bg-gray-50 transition"
                onClick={() => setOpen(open === idx ? -1 : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                {faq.question}
                <span className={`ml-4 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-5 text-gray-600 text-base transition-all duration-300 ease-in-out ${open === idx ? 'block' : 'hidden'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}