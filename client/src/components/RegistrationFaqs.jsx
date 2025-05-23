import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
const RegistrationFaqs = () => {
  return (
    <section className='relative z-2 overflow-hidden bg-base-200 pb-12 pt-20 dark:bg-dark lg:pb-12 lg:pt-[70px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px]  text-center lg:mb-20'>
              <h2 className='mb-4 text-3xl font-bold text-base-content sm:text-[40px]/[48px]'>
                Any Questions about registration?
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                Here, you can find answers to many questions you may have in
                your mind about registering to SAGI at this time.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='Can one register to SAGI as an individual?'
              text='Yes, today SAGI has SAGI POOL and any individual who come to SAGI on his own can register in SAGI POOL by filling out the SAGI POOL REGISTRATION FORM in the REGISTRATION tab of this section.'
            />
            <AccordionItem
              header='How to register my association with SAGI?'
              text='The first step is to constitute an association or group for SAGI purpose, then fill out SAGI INTRODUCTORY FORM above, and go from there. .'
            />
            <AccordionItem
              header='Can you benefit if you die in Cameroon while visiting?'
              text='Yes, starting May 1 2024, if you are a US citizen or alien resident and happen to pass away while visiting Cameroon for a period of six months or less, you will can benefit from SAGI.'
            />
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='How to become a SAGI member as individual?'
              text='To become a SAGI member, you must reside here in USA and belong to a group or association.  Your association delegate must register you on SAGI web application All we need is your name as it appears on your official documents, including Day and Month and year of birth.  No medical test is required.  You can register your parents or love ones who live in USA.  SAGI accepts anyone without distinction of age, sex, tribal or religion.'
            />
            <AccordionItem
              header='Who can be a SAGI member?'
              text='Any Cameroonian or spouse of Cameroonian'
            />
            <AccordionItem
              header='Can any association become a SAGI member?'
              text='Yes.  However, it is at the discretion of SAGI to accept or to decline the membership of an association or a member to its organization.'
            />
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 right-0 z-[-1]'>
        <svg
          width='1440'
          height='886'
          viewBox='0 0 1440 886'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.5'
            d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
            fill='url(#paint0_linear)'
          />
        </svg>
      </div>
    </section>
  );
};

export default RegistrationFaqs;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className='mb-8 w-full rounded-lg bg-base-200 p-4 '>
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5'>
          <FaChevronDown
            className={`fill-primary stroke-primary duration-200 w-6 h-6 ease-in-out ${
              active ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div className='w-full'>
          <h4 className='mt-1 text-lg font-semibold text-primary'>{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className='py-3 text-base leading-relaxed text-body-color dark:text-dark-6'>
          {text}
        </p>
      </div>
    </div>
  );
};
