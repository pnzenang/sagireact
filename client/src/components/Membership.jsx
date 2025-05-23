import { MdOutlineGroups2 } from 'react-icons/md';
import { PiUserFocusDuotone } from 'react-icons/pi';
import working from '../assets/images/workingSagi.jpg';
import together from '../assets/images/link.svg';
const Membership = () => {
  return (
    <section className='overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-2 bg-base-100'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center justify-between -mx-4'>
          <div className='w-full px-4 lg:w-6/12'>
            <div className='relative mb-12 lg:mb-0'>
              <div className='mx-auto max-w-[500px] rounded-tl-[50px] sm:rounded-tl-[70px]'>
                <img
                  src={together}
                  alt='about image'
                  className='w-full rounded-tl-[50px] sm:rounded-tl-[70px]'
                />
              </div>
              <div className='bg-primary absolute bottom-0 right-0 z-10 max-w-[320px] overflow-hidden rounded-tr-[50px] py-10 px-6 text-xl font-bold text-white sm:px-10 sm:text-2xl'>
                We make sure that no one is left out.
                <div>
                  <span className='absolute top-0 left-0 -z-10'>
                    <svg
                      width='115'
                      height='117'
                      viewBox='0 0 115 117'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.1'
                        x='-30.1333'
                        y='20.4912'
                        width='76'
                        height='131.304'
                        transform='rotate(-42.8643 -30.1333 20.4912)'
                        fill='url(#paint0_linear_1408_646)'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_1408_646'
                          x1='7.8667'
                          y1='20.4912'
                          x2='7.8667'
                          y2='151.795'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='white' />
                          <stop offset='1' stopColor='white' stopOpacity='0' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className='absolute top-0 right-0 -z-10'>
                    <svg
                      width='239'
                      height='144'
                      viewBox='0 0 239 144'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.1'
                        x='0.872192'
                        y='-5.28418'
                        width='155.563'
                        height='209.511'
                        transform='rotate(-42.8643 0.872192 -5.28418)'
                        fill='url(#paint0_linear_1408_647)'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_1408_647'
                          x1='78.6537'
                          y1='-5.28418'
                          x2='78.6537'
                          y2='204.226'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='white' />
                          <stop offset='1' stopColor='white' stopOpacity='0' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className='absolute bottom-0 right-5 -z-10'>
                    <svg
                      width='185'
                      height='116'
                      viewBox='0 0 185 116'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.1'
                        x='184.849'
                        y='118.71'
                        width='101.246'
                        height='161.199'
                        transform='rotate(137.136 184.849 118.71)'
                        fill='url(#paint0_linear_1408_648)'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_1408_648'
                          x1='235.472'
                          y1='118.71'
                          x2='235.472'
                          y2='279.91'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='white' />
                          <stop offset='1' stopColor='white' stopOpacity='0' />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2 2xl:w-5/12'>
            <div className='mt-10 lg:mt-0'>
              <h2 className='text-3xl font-bold leading-tight text-base-content mb-11 sm:text-3xl sm:leading-tight md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl'>
                There are two types of membership:
              </h2>

              <div className='flex mb-8'>
                <span className='text-primary w-full max-w-[45px] pr-4 text-4xl font-bold'>
                  1
                </span>
                <div className='w-full'>
                  <h3 className='mb-4 text-xl font-bold text-primary sm:text-2xl lg:text-xl xl:text-4xl capitalize'>
                    Traditional membership
                  </h3>
                  <p className='text-base text-body-color dark:text-dark-6 mb-9'>
                    Here, individuals are SAGI members through a SAGI
                    association member, and does not interact directly with
                    SAGI, they rely 100% on the delegates, and should voice all
                    their concerns and remarks to the delegates who will then
                    relay them to SAGI Administration. this membership is open
                    to all Cameroonians and spouse of Cameroonians and does not
                    require any upfront prepayment, the members pay for their
                    registration fee and their contributions when they are
                    solicited.
                  </p>
                </div>
              </div>

              <div className='flex'>
                <span className='text-primary w-full max-w-[45px] pr-4 sm:text-4xl font-bold'>
                  2
                </span>
                <div className='w-full'>
                  <h3 className='mb-4 text-xl font-bold text-primary sm:text-4xl  capitalize'>
                    Pool membership
                  </h3>
                  <p className='text-base-content mb-9'>
                    This membership is reserve for Cameroonians or spouse of
                    Cameroonians who could not or are not willing to join an
                    association or a group of at least 20 people, in this
                    situation, unlike in the first option, the members have to
                    keep a close contact with SAGI administration through SAGI
                    POOL Specialist with whom he will register and provide the
                    necessary documentation to become a fully active SAGI
                    Member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Membership;
