import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const faqData = [
    {
      category: 'Eligibility',
      questions: [
        {
          question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
          answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
        },
        {
          question: 'What is the minimum system configuration required?',
          answer: 'The minimum system requirements include an internet connection, a computer with at least 4GB of RAM, and a modern web browser.'
        }
      ]
    },
    {
      category: 'How To Use?',
      questions: [
        {
          question: 'How do I access the course materials?',
          answer: 'Course materials will be available online through our learning management system, accessible once you enroll in the program.'
        }
      ]
    },
    {
      category: 'Terms & Conditions',
      questions: [
        {
          question: 'What is the refund policy?',
          answer: 'You can request a refund within 14 days of enrollment if you are not satisfied with the program. Please refer to our refund policy for more details.'
        }
      ]
    }
  ];
const Questions = () => {

    const [activeCategory, setActiveCategory] = useState('Eligibility');
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
    <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">Frequently Asked <span className="text-blue-600">Questions</span></h2>
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-4 mb-6 lg:mb-0">
        <ul className="space-y-4">
          {faqData.map((category, index) => (
            <li
              key={index}
              onClick={() => setActiveCategory(category.category)}
              className={`py-2 px-4 rounded-lg cursor-pointer ${activeCategory === category.category ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : 'hover:bg-blue-100 hover:text-blue-600'}`}
            >
              {category.category}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-4">
        {faqData.filter(category => category.category === activeCategory).map((category, index) => (
          <div key={index}>
            {category.questions.map((q, qIndex) => (
              <Disclosure key={qIndex}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full py-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>{q.question}</span>
                      {open ? <FaChevronUp className="w-5 h-5 text-blue-600" /> : <FaChevronDown className="w-5 h-5 text-blue-600" />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600">
                      {q.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Questions