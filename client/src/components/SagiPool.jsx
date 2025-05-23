import SagiPoolFaqs from './SagiPoolFags';
import {
  UserPlus,
  MessageCircleQuestion,
  Layers3,
  CalendarClock,
} from 'lucide-react';

const SagiPool = () => {
  return (
    <section className='pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-[70px]'>
              <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-base-content sm:text-4xl md:text-[40px]'>
                Welcome to SAGI POOL.
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                In this membership type, the member control almost everything in
                connection to his or her membership.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <ServiceCard
            title='You control your destiny'
            details=' The member need to make sure that all the requirements are met. fill up his or her part of the puzzle.'
            icon={<UserPlus className='text-primary w-10 h-10' />}
          />
          <ServiceCard
            title='Organized tasks'
            details='The membership is organized so that each member has to complete his or her part of the contract.'
            icon={<Layers3 className='text-primary w-10 h-10' />}
          />
          <ServiceCard
            title='Clear feedback sharing'
            details='The member has to know what has transpired from all decision makings as if their live depend on. .'
            icon={<MessageCircleQuestion className='text-primary w-10 h-10' />}
          />
          <ServiceCard
            title='Never miss deadline'
            details='The member is responsible of making sure he or she never miss a deadline, his or her membership depend on.'
            icon={<CalendarClock className='text-primary w-10 h-10' />}
          />
        </div>
      </div>
      <SagiPoolFaqs />
    </section>
  );
};
export default SagiPool;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <div className='w-full px-4 md:w-1/2 lg:w-1/2 xl:w-5/12'>
      <div className='mb-8 flex md:block lg:mb-[70px] lg:flex 2xl:px-4'>
        <div className='relative mb-8 mr-6 flex h-[86px] w-full max-w-[92px] items-center justify-center 2xl:mr-12'>
          <span className='absolute flex h-full w-full items-center justify-center '>
            <svg
              width='90'
              height='80'
              viewBox='0 0 90 80'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M77.3075 75.5919C55.5426 89.4391 4.12998 68.3894 0.253208 43.9936C-3.71342 19.5606 39.8558 -8.21873 65.6266 2.28194C91.2683 12.8307 99.1116 61.6595 77.3075 75.5919Z'
                fill='red'
                fillOpacity='0.06'
                className='bg-base-200'
              />
            </svg>
          </span>
          <span>{icon}</span>
        </div>
        <div>
          <h4 className='mb-4 text-[22px] font-bold leading-[32px] text-primary'>
            {title}
          </h4>
          <p className='text-base text-body-color dark:text-dark-6'>
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};
