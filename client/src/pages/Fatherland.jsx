import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Fatherland = () => {
  return (
    <section className='relative  overflow-hidden  pb-12 pt-20 m-5 lg:pb-20 lg:pt-32'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-3xl  lg:mb-20'>
              <h2 className='mb-4 text-3xl font-bold text-center  md:text-6xl '>
                SAGI-Fatherland
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                Most of us came from somewhere, and left many family members and
                loved ones behind, and anytime one of them falls, we are called
                to contribute for his or her funeral, one way or another.
                <br />
                One easy way of getting through the hurdle for those of us who
                do not have a pile of cash sitting in a bank account, without
                breaking the bank is to put our effort together anytime
                necessary. The SAGI organization has set up a database for each
                fatherland where we come from so that we can get together to
                make it easier on us anytime we have to take care or contribute
                for a departed loved one back home.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='SAGI CAMEROON'
              text='Click on the link below to register your loved ones living back in Cameroon with sagicam.org in order to get together with other brothers and sisters  to make it easier if heaven for bits, one of them falls.'
              url='https://www.sagicam.org'
            />
            <AccordionItem
              header='SAGI NIGERIA'
              text='Page Under construction'
              // text='Click on the link below to register your loved ones living back in Nigeria with saginig.org in order to get together with other brothers and sisters  to make it easier if heaven for bits, one of them falls.'
              // url='https//www.saginig.org'
            />
            <AccordionItem
              header='SAGI GHANA'
              text='Page Under construction'
              // text='Click on the link below to register your loved ones living back in Ghana with sagigha.org in order to get together with other brothers and sisters  to make it easier if heaven for bits, one of them falls.'
              // url='https//www.sagigha.org'
            />
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='SAGI SIERRA LEONE'
              text='Page Under construction'
              // text='Click on the link below to register your loved ones living back in Sierra Leone with sagisie.org in order to get together with other brothers and sisters  to make it easier if heaven for bits, one of them falls.'
              // url='https//www.sagisie.org'
            />
            <AccordionItem
              header='SAGI TOGO'
              text='Page Under construction'
              // text='Click on the link below to register your loved ones living back in TOGO with sagitog.org in order to get together with other brothers and sisters  to make it easier if heaven for bits, one of them falls.'
              // url='https//www.sagitog.org'
            />
            <AccordionItem
              header='SAGI BURKINA FASO'
              text='Page Under construction'
              // text='Click on the link below to register your loved ones living back in Burkina Faso with sagibur.org in order to get together with other brothers and sisters  to make it easier if heaven for bits, one of them falls.'
              // url='https//www.sagibur.org'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fatherland;

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ header, text, url }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className='mb-8 w-full rounded-lg bg-base-300 p-4 shadow-xl dark:bg-dark-2 dark:shadow-xl sm:p-8 lg:px-6 xl:px-8'>
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg   text-primary bg-secondary'>
          <FaChevronDown
            className={`fill-primary stroke-primary duration-200 ease-in-out w-10 text-primary ${
              active ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div className='w-full'>
          <h4 className='mt-1 text-lg sm:text-2xl font-semibold'>{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className='py-3 text-base-content leading-relaxed '>{text}</p>
        <p className='py-3 text-base-content leading-relaxed '>
          <a href={url} className='ml-2 link link-hover link-primary '>
            {url}
          </a>
        </p>
      </div>
    </div>
  );
};
