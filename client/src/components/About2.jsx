import {
  FaUsersViewfinder,
  FaBullhorn,
  FaHandshake,
  FaUnity,
} from 'react-icons/fa6';
import people from '../assets/images/world.svg';
import { Seo } from './Seo';

export default function About2() {
  return (
    <section className='overflow-hidden px-5 py-20 lg:pt-[120px] flex justify-center'>
      <div className='container '>
        <div className='mx-auto mb-20 w-full max-w-[620px] text-center'>
          <Seo title='SAGI' description='Helping people helping themselves' />
          <h3 className='mb-3 text-5xl font-bold  sm:text-4xl md:text-7xl '>
            About Us
          </h3>
          <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto mb-20'></div>

          <div className='sm:flex  justify-center gap-y-6  '>
            <div className='py-3'>
              <h3 className='mb-2 text-3xl sm:text-5xl font-bold text-dark '>
                15+
              </h3>
              <p className='text-body-color dark:text-dark-6'>
                Years of Experience
              </p>
            </div>
            <div className='mx-12 sm:border-x border-stroke px-12 py-5'>
              <h3 className='mb-2 text-3xl sm:text-5xl font-bold text-dark '>
                12,000+
              </h3>
              <p className='text-body-color dark:text-dark-6'>Active Members</p>
            </div>
            <div className=' sm:border-r sm:border-stroke px-12 py-5'>
              <h3 className='mb-2 text-3xl sm:text-5xl font-bold text-dark '>
                $7,000,000+
              </h3>
              <p className='text-body-color dark:text-dark-6'>
                Raised for families
              </p>
            </div>
            <div className=' border-stroke px-12 py-5'>
              <h3 className='mb-2 text-3xl sm:text-5xl font-bold text-dark '>
                350+
              </h3>
              <p className='text-body-color dark:text-dark-6'>
                Active Associations
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap items-end justify-center'>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='w-full space-y-20 pb-20 lg:max-w-[320px]'>
              <div>
                <div className='mb-5 flex items-center gap-6 lg:flex-row-reverse'>
                  <FaBullhorn className='text-primary text-3xl' />
                  <h4 className='text-2xl font-bold '>All Together</h4>
                </div>
                <p className='text-base text-body-color lg:text-right dark:text-dark-6'>
                  SAGI is open to anyone willing to make other people&lsquo;s
                  problem their problem.
                </p>
              </div>
              <div>
                <div className='mb-5 flex items-center gap-6 lg:flex-row-reverse'>
                  <FaUsersViewfinder className='text-primary text-3xl' />

                  <h4 className='text-2xl font-bold '>People Oriented</h4>
                </div>
                <p className='text-base text-body-color lg:text-right dark:text-dark-6'>
                  SAGI is the unique place where the difference of culture is an
                  asset
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:order-last lg:w-1/3'>
            <div className='ml-auto w-full space-y-20 pb-20 lg:max-w-[320px]'>
              <div>
                <div className='mb-5 flex items-center gap-6'>
                  <FaHandshake className='text-primary text-3xl' />
                  <h4 className='text-2xl font-bold '>Ultimate teamwork</h4>
                </div>
                <p className='text-base text-body-color dark:text-dark-6'>
                  In SAGI, we make one family&lsquo;s problem, the problem of
                  all.
                </p>
              </div>
              <div>
                <div className='mb-5 flex items-center gap-6'>
                  <FaUnity className='text-3xl text-primary' />
                  <h4 className='text-2xl font-bold '>Ultimate Uniter</h4>
                </div>
                <p className='text-base text-body-color dark:text-dark-6'>
                  SAGI unites people from all walks of life, from all over.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
            <div className='relative z-10 overflow-hidden text-center max-lg:mt-10'>
              {/* <div className='absolute -bottom-24 left-1/2 -z-10 h-full w-full -translate-x-1/2 rounded-t-full bg-primary/50'></div> */}
              <img src={people} alt='about image' className='mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
