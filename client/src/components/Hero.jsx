import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import hero1 from '../assets/solidarity.jpg';
import hero2 from '../assets/protect.jpg';
import hero3 from '../assets/saving2.jpg';

const Hero12 = () => {
  const typedJSRef = useRef(null);
  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [
        'a peace of mind.',
        'a true solidarity.',
        'a dynamic help.',
        'a noble culture.',
      ],
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);

  return (
    <>
      <div className='relative pb-4 pt-4 pb-base-100 lg:pt-4'>
        <div className='container mx-auto '>
          <div className='-mx-4 flex flex-wrap items-center'>
            <div className='w-full px-4 lg:w-1/2'>
              <div className='px-4 mb-12 lg:mb-0'>
                <h2 className='mb-4 text-4xl font-bold !leading-[1.208] text-primary lg:text-5xl xl:text-7xl'>
                  SAGI infers
                  <br />
                  <span ref={typedJSRef} />
                </h2>
                <p className=' mt-2 max-w-xxl text-lg leading-8 text-base-content '>
                  At SAGI, we mimic the african solidarity, making one
                  family&apos;s problem the problem of the whole community by
                  putting our effort together every time one of our member
                  falls. It is the hallmark of the African solidarity.
                  <br />
                  SAGI membership give us a sense of protection and peace of
                  mind.
                  <br />
                  Moreover, at SAGI we give with love.
                </p>
              </div>
            </div>
            <div className='w-full px-6 lg:w-1/2'>
              <div className='-mx-2 flex flex-wrap sm:-mx-4'>
                <div className='w-1/2 px-2 sm:px-4'>
                  <div className='mb-4 h-[256px] sm:mb-8 sm:h-[442px] lg:h-[332px] xl:h-[442px]'>
                    <img
                      src={hero2}
                      alt='hero image'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                </div>
                <div className='w-1/2 px-2 sm:px-4'>
                  <div className='mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]'>
                    <img
                      src={hero1}
                      alt='hero image'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <div className='mb-4 h-[120px] sm:mb-8 sm:h-[205px] lg:h-[150px] xl:h-[205px]'>
                    <img
                      src={hero3}
                      alt='hero image'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero12;
