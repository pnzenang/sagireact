import React, { useState } from 'react';

const ListUpdatesFaqs = () => {
  return (
    <section className='bg-base-100 pb-10 pt-20 dark:bg-dark  lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px]  text-center lg:mb-20'>
              <h2 className='mb-4 text-3xl font-bold text-base-content sm:text-[40px]/[48px]'>
                Frequently ask questions about list updates
              </h2>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <div className='w-full px-4 xl:w-10/12'>
            <AccordionItem
              header='Do we still have to fill forms to add members?'
              text='No, adding members is done straight on the association/delegate dashboard and the members information will end up on SAGI database, the delegate can then let the prospective members the exact date he or she will become vested.'
            />
            <AccordionItem
              header='Do we still have to fill forms to remove members?'
              text='No, The withdrawal is done straight on the association/delegate dashboard, the delegate choose the option remove from the button: Delegate Recommendation.'
            />
            <AccordionItem
              header='How to transfer a member from one association to another?'
              text='To Transfer a member from Association A to association B, both delegate need to select the option TRANSFER for the same member by clicking Delegate Recommendation button, and SAGI admin will do the rest.'
            />
            <AccordionItem
              header='NAME CORRECTION – How to correct the name of a members?'
              text='The delegate should download the form (Form S4 – SAGI Name Correction), filling it out and returning it to us at info@mySag.org. If the name have been changed due to divorce or so, a court document is required as a proof.'
            />
            {/* <AccordionItem
              header='Can I get the Feature Updates?'
              text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListUpdatesFaqs;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className='mb-10 rounded-lg bg-base-200 px-7 py-6 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] dark:bg-dark-2 md:px-10 md:py-8'>
      <button
        className={`faq-btn flex w-full items-center justify-between text-left`}
        onClick={() => handleToggle()}
      >
        <h4 className='mr-2 text-base font-semibold text-primary sm:text-lg md:text-xl lg:text-2xl'>
          {header}
        </h4>
        <span className='icon inline-flex h-8 w-full max-w-[32px] items-center justify-center rounded-full border-2 border-primary text-lg font-semibold text-primary'>
          {active ? '-' : '+'}
        </span>
      </button>

      <div className={`${active ? 'block' : 'hidden'}`}>
        <p className='text-relaxed pt-6 text-base text-body-color dark:text-dark-6'>
          {text}
        </p>
      </div>
    </div>
  );
};
