import React, { useState } from 'react';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: 'How many sessions should I choose for my child?',
      answer:
        "The number of sessions depends on your child's specific needs and goals. Our team can help guide you to select the ideal package based on an initial consultation.",
    },
    {
      question: 'Are your prices competitive with in-person therapy costs?',
      answer:
        'Yes, our online sessions are designed to be affordable and often cost less than in-person therapy while maintaining high standards of care and convenience.',
    },
    {
      question: 'How long is the validity of my purchased sessions?',
      answer:
        'Purchased sessions are valid for six months, giving you the flexibility to schedule them at your convenience within that period.',
    },
    {
      question: 'What are the payment options available?',
      answer:
        'We accept credit/debit cards, bank transfers, and various secure online payment methods. Details are provided at checkout for easy payment processing.',
    },
    {
      question: 'I completed the payment but haven’t received a confirmation. What should I do?',
      answer:
        'If you haven’t received a confirmation, please allow a few minutes. If the issue persists, contact our support team for assistance.',
    },
  ];

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] p-6">
        <h2 className="font-manrope text-[40px] font-bold text-[#F6E8FB]">Frequently Asked Questions</h2>
        <div className="mx-auto mt-10 w-[55vw] rounded-3xl bg-[#564A5957] p-8 max-sm:w-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-400">
                <div
                  onClick={() => toggleQuestion(index)}
                  className="flex cursor-pointer items-center justify-between py-4"
                >
                  <p className="font-raleway text-lg text-[#F6E8FB]">
                    {index + 1}. {item.question}
                  </p>
                  <button className="text-xl font-semibold text-gray-300">{openQuestion === index ? '−' : '+'}</button>
                </div>
                {openQuestion === index && (
                  <p className="mb-4 mt-2 font-montserrat text-sm text-gray-300">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 cursor-pointer text-center text-gray-400">View All</div>
        </div>
      </div>
    </>
  );
};

export default Faq;
