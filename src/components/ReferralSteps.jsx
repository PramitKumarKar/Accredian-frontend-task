
import React, { useState } from 'react';
import ReferModal from "./ReferModal" 

const steps = [
  {
    icon: '👤', 
    title: 'Submit referrals easily via our website’s referral section.',
  },
  {
    icon: '✏️',
    title: 'Earn rewards once your referral joins an Accredian program.',
  },
  {
    icon: '💼',
    title: 'Both parties receive a bonus 30 days after program enrollment.',
  },
];

const ReferralSteps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-blue-50 py-10">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-10">How Do I Refer?</h2>
      <div className="flex justify-around">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 max-w-xs text-center">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <span className="text-4xl">{step.icon}</span>
            </div>
            <p className="text-lg text-gray-700">{step.title}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center pt-20'>
        <button
          className="bg-blue-600 text-white text-lg font-semibold py-4 px-12 rounded-xl shadow hover:bg-blue-700 transition duration-300"
          onClick={openModal}
        >
          Refer Now
        </button>
      </div>

      <ReferModal isOpen={isModalOpen} closeModal={closeModal} /> 
    </div>
  );
};

export default ReferralSteps;
