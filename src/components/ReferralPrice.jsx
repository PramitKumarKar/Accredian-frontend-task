import React, {useState} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import ReferModal from "./ReferModal"
const programs = [
    { name: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { name: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { name: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { name: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
  ];
  
  const categories = [
    'ALL PROGRAMS',
    'PRODUCT MANAGEMENT',
    'STRATEGY & LEADERSHIP',
    'BUSINESS MANAGEMENT',
    'FINTECH',
    'SENIOR MANAGEMENT',
    'DATA SCIENCE',
    'DIGITAL TRANSFORMATION',
    'BUSINESS ANALYTICS',
  ];
  
const ReferralPrice = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
    <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">What Are The <span className="text-blue-600">Referral Benefits?</span></h2>
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-4 mb-6 lg:mb-0">
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li key={index} className={`flex justify-between items-center py-2 px-4 rounded-lg cursor-pointer ${index === 0 ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : 'hover:bg-blue-100 hover:text-blue-600'}`}>
              {category}
              <MdKeyboardArrowRight />
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Programs</th>
              <th className="py-3 px-4 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Referrer Bonus</th>
              <th className="py-3 px-4 border-b-2 border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((program, index) => (
              <tr key={index} className="hover:bg-gray-100 transition duration-300">
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">{program.name}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">{program.referrerBonus}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-700">{program.refereeBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    <div className='flex justify-center items-center pt-10'>
    <button
          className="bg-blue-600 text-white text-lg font-semibold py-4 px-12 rounded-xl shadow hover:bg-blue-700 transition duration-300"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>
      <ReferModal isOpen={isModalOpen} closeModal={closeModal} /> 
  </div>

  )
}

export default ReferralPrice