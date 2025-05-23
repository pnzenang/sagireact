import { FiPhoneCall } from 'react-icons/fi';
import { FaEnvelope, FaRegEnvelope } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Seo } from '../components/Seo';

const Contact = () => {
  return (
    <>
      <section className='relative z-10 overflow-hidden bg-base-200  dark:bg-dark  lg:py-[120px]'>
        <div className='container align-element '>
          <div className='-mx-4 flex flex-wrap lg:justify-between'>
            <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
              <div className='my-12 max-w-[570px] lg:mb-0'>
                <Seo
                  title='SAGI'
                  description='Helping people helping themselves'
                />
                <h2 className='mb-6 text-[32px] font-bold uppercase text-primary sm:text-[40px] lg:text-[36px] xl:text-[40px]'>
                  LET'S GET IN TOUCH
                </h2>
                <p className='mb-9 text-base leading-relaxed text-body-color dark:text-dark-6'>
                  We would love to have you on board with us, but if you have
                  not made the decision to join us yet, it is fine.
                  Nevertheless, we still like to here from you, call or email us
                  to voice your concerns or make any remarks anytime, your
                  questions or remarks are always welcome. they will help us to
                  grow.
                </p>
                <div className='mb-8 flex w-full max-w-[370px]'>
                  <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                    <HiOutlineBuildingOffice2 className='w-7 h-7 text-primary' />
                  </div>
                  <div className='w-full'>
                    <h4 className='mb-1 text-xl font-bold text-base-content'>
                      Location
                    </h4>
                    <p className='text-primary'>
                      23612 Public House Road
                      <br /> Clarksburg MD 20871
                    </p>
                  </div>
                </div>

                <div className='mb-8 flex w-full max-w-[370px]'>
                  <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                    <FiPhoneCall className='w-7 h-7 text-primary' />
                  </div>
                  <div className='w-full'>
                    <h4 className='mb-1 text-xl font-bold text-base-content'>
                      Phone Number
                    </h4>
                    <p className='text-primary'>1(804)-214-6390</p>
                  </div>
                </div>

                <div className='mb-8 flex w-full max-w-[370px]'>
                  <div className='mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]'>
                    <FaRegEnvelope className='w-7 h-7 text-primary' />
                  </div>
                  <div className='w-full'>
                    <h4 className='mb-1 text-xl font-bold text-base-content'>
                      Email Address
                    </h4>
                    <p className='text-primary'>info@mySagi.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
              <div className='relative rounded-lg bg-base-300 p-8 shadow-lg dark:bg-dark-2 sm:p-12'>
                <form>
                  <ContactInputBox
                    type='text'
                    name='name'
                    placeholder='Your Name'
                  />
                  <ContactInputBox
                    type='text'
                    name='email'
                    placeholder='Your Email'
                  />
                  <ContactInputBox
                    type='text'
                    name='phone'
                    placeholder='Your Phone'
                  />
                  <ContactTextArea
                    row='6'
                    placeholder='Your Message'
                    name='details'
                    defaultValue=''
                  />
                  <div>
                    <button
                      type='submit'
                      className='w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  {/* <span className='absolute -right-9 -top-10 z-[-1]'>
                    <svg
                      width={100}
                      height={100}
                      viewBox='0 0 100 100'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
                        fill='#3056D3'
                      />
                    </svg>
                  </span>
                  <span className='absolute -right-10 top-[90px] z-[-1]'>
                    <svg
                      width={34}
                      height={134}
                      viewBox='0 0 34 134'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='31.9993'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 31.9993 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 31.9993 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 31.9993 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 31.9993 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 31.9993 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 31.9993 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 31.9993 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 31.9993 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 31.9993 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 31.9993 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 17.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 17.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 17.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 17.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 17.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 17.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 17.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 17.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 17.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 17.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 2.66536 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 2.66536 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 2.66536 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 2.66536 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 2.66536 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 2.66536 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 2.66536 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 2.66536 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 2.66536 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 2.66536 1.66665)'
                        fill='#13C296'
                      />
                    </svg>
                  </span> */}
                  <span className='absolute -bottom-7 -left-7 z-[-1]'>
                    <svg
                      width={107}
                      height={134}
                      viewBox='0 0 107 134'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle
                        cx='104.999'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 104.999 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 104.999 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 104.999 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 104.999 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 104.999 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 104.999 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 104.999 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 104.999 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 104.999 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='104.999'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 104.999 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 90.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 90.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 90.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 90.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 90.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 90.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 90.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 90.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 90.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='90.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 90.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 75.6654 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 31.9993 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 75.6654 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 31.9993 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 75.6654 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 31.9993 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 75.6654 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 31.9993 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 75.6654 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 31.9993 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 75.6654 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 31.9993 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 75.6654 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 31.9993 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 75.6654 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 31.9993 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 75.6654 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 31.9993 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='75.6654'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 75.6654 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='31.9993'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 31.9993 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 60.9993 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 17.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 60.9993 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 17.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 60.9993 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 17.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 60.9993 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 17.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 60.9993 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 17.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 60.9993 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 17.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 60.9993 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 17.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 60.9993 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 17.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 60.9993 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 17.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='60.9993'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 60.9993 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='17.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 17.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 46.3333 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={132}
                        r='1.66667'
                        transform='rotate(180 2.66536 132)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 46.3333 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='117.333'
                        r='1.66667'
                        transform='rotate(180 2.66536 117.333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 46.3333 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='102.667'
                        r='1.66667'
                        transform='rotate(180 2.66536 102.667)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 46.3333 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={88}
                        r='1.66667'
                        transform='rotate(180 2.66536 88)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 46.3333 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='73.3333'
                        r='1.66667'
                        transform='rotate(180 2.66536 73.3333)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 46.3333 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={45}
                        r='1.66667'
                        transform='rotate(180 2.66536 45)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 46.3333 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={16}
                        r='1.66667'
                        transform='rotate(180 2.66536 16)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 46.3333 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy={59}
                        r='1.66667'
                        transform='rotate(180 2.66536 59)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 46.3333 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='30.6666'
                        r='1.66667'
                        transform='rotate(180 2.66536 30.6666)'
                        fill='#13C296'
                      />
                      <circle
                        cx='46.3333'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 46.3333 1.66665)'
                        fill='#13C296'
                      />
                      <circle
                        cx='2.66536'
                        cy='1.66665'
                        r='1.66667'
                        transform='rotate(180 2.66536 1.66665)'
                        fill='#13C296'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className='mb-6'>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className='w-full resize-none rounded border border-stroke px-[14px] py-3 text-base-content outline-none focus:border-primary dark:border-dark-3 bg-base-100 dark:text-dark-6'
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className='mb-6 bg-base-300'>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className='w-full rounded border border-stroke px-[14px] py-3 text-base-content bg-base-100 outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6'
        />
      </div>
    </>
  );
};
