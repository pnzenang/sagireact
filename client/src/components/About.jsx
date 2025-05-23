import { styled } from 'styled-components';
// import main from '../assets/about.jpeg';
// import beautySagi from '../assets/images/beautySagi.jpg';
// import happySagi from '../assets/images/happySagi.jpg';
// import togetherSagi from '../assets/images/togetherSagi.jpg';
import { PiHandshakeDuotone } from 'react-icons/pi';
import { TbUsersGroup } from 'react-icons/tb';

const About = () => {
  return (
    <Wrapper>
      <section className='overflow-hidden  pb-12 lg:pt-[60px] lg:pb-[90px] bg-base-200 rounded-lg '>
        <div>
          <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content '>
            about us
          </h1>
          <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto mb-20'></div>
        </div>
        <div className='container mx-auto p-10 align-element'>
          <div className='flex flex-wrap items-center justify-between -mx-4'>
            <div className='w-full px-4 lg:w-6/12'>
              <div className='flex items-center -mx-3 sm:-mx-4 '>
                <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                  <div className='py-3 sm:py-4'>
                    <PiHandshakeDuotone className='w-52 h-52 text-primary' />
                    {/* <img
                      src='https://res.cloudinary.com/dp8tkb7hq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1713726733/respect_tqld6e.png'
                      alt='together'
                      className='w-full rounded-2xl'
                    /> */}
                  </div>
                  <div className='py-3 sm:py-4'>
                    <TbUsersGroup className='w-52 h-52 text-primary' />
                    {/* <img
                      src='https://res.cloudinary.com/dp8tkb7hq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1713717234/team_1_agtn70.png'
                      alt='together'
                      className='w-full rounded-2xl'
                    /> */}
                  </div>
                </div>
                <div className='w-full px-3 sm:px-4 xl:w-1/2'>
                  <div className='relative z-10 my-4'>
                    <img
                      src='https://res.cloudinary.com/dp8tkb7hq/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1713717479/collaboration_rkvnrh.png'
                      alt='likes'
                      className='w-full rounded-2xl'
                    />
                    {/* <span className='absolute -right-7 -bottom-7 z-[-1]'>
                      <svg
                        width={134}
                        height={106}
                        viewBox='0 0 134 106'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='1.66667'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 1.66667 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 16.3333 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 31 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 45.6667 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3334'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 60.3334 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 88.6667 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 117.667 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 74.6667 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 103 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r='1.66667'
                          transform='rotate(-90 132 104)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='89.3333'
                          r='1.66667'
                          transform='rotate(-90 1.66667 89.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='89.3333'
                          r='1.66667'
                          transform='rotate(-90 16.3333 89.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='89.3333'
                          r='1.66667'
                          transform='rotate(-90 31 89.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='89.3333'
                          r='1.66667'
                          transform='rotate(-90 45.6667 89.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='89.3338'
                          r='1.66667'
                          transform='rotate(-90 60.3333 89.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='89.3338'
                          r='1.66667'
                          transform='rotate(-90 88.6667 89.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='89.3338'
                          r='1.66667'
                          transform='rotate(-90 117.667 89.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='89.3338'
                          r='1.66667'
                          transform='rotate(-90 74.6667 89.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='89.3338'
                          r='1.66667'
                          transform='rotate(-90 103 89.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='89.3338'
                          r='1.66667'
                          transform='rotate(-90 132 89.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='74.6673'
                          r='1.66667'
                          transform='rotate(-90 1.66667 74.6673)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='31.0003'
                          r='1.66667'
                          transform='rotate(-90 1.66667 31.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 16.3333 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='31.0003'
                          r='1.66667'
                          transform='rotate(-90 16.3333 31.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 31 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='31.0003'
                          r='1.66667'
                          transform='rotate(-90 31 31.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 45.6667 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='31.0003'
                          r='1.66667'
                          transform='rotate(-90 45.6667 31.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 60.3333 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='30.9998'
                          r='1.66667'
                          transform='rotate(-90 60.3333 30.9998)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 88.6667 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='30.9998'
                          r='1.66667'
                          transform='rotate(-90 88.6667 30.9998)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 117.667 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='30.9998'
                          r='1.66667'
                          transform='rotate(-90 117.667 30.9998)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 74.6667 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='30.9998'
                          r='1.66667'
                          transform='rotate(-90 74.6667 30.9998)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 103 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='30.9998'
                          r='1.66667'
                          transform='rotate(-90 103 30.9998)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='74.6668'
                          r='1.66667'
                          transform='rotate(-90 132 74.6668)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='30.9998'
                          r='1.66667'
                          transform='rotate(-90 132 30.9998)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 1.66667 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 1.66667 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 16.3333 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 16.3333 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 31 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 31 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 45.6667 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 45.6667 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 60.3333 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 60.3333 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 88.6667 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 88.6667 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 117.667 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 117.667 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 74.6667 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 74.6667 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 103 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 103 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='60.0003'
                          r='1.66667'
                          transform='rotate(-90 132 60.0003)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='16.3333'
                          r='1.66667'
                          transform='rotate(-90 132 16.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='45.3333'
                          r='1.66667'
                          transform='rotate(-90 1.66667 45.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='1.66667'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 1.66667 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='45.3333'
                          r='1.66667'
                          transform='rotate(-90 16.3333 45.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='16.3333'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 16.3333 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='45.3333'
                          r='1.66667'
                          transform='rotate(-90 31 45.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={31}
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 31 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='45.3333'
                          r='1.66667'
                          transform='rotate(-90 45.6667 45.3333)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='45.6667'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 45.6667 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='45.3338'
                          r='1.66667'
                          transform='rotate(-90 60.3333 45.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='60.3333'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 60.3333 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='45.3338'
                          r='1.66667'
                          transform='rotate(-90 88.6667 45.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='88.6667'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 88.6667 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='45.3338'
                          r='1.66667'
                          transform='rotate(-90 117.667 45.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='117.667'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 117.667 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='45.3338'
                          r='1.66667'
                          transform='rotate(-90 74.6667 45.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx='74.6667'
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 74.6667 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='45.3338'
                          r='1.66667'
                          transform='rotate(-90 103 45.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={103}
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 103 1.66683)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='45.3338'
                          r='1.66667'
                          transform='rotate(-90 132 45.3338)'
                          fill='#3056D3'
                        />
                        <circle
                          cx={132}
                          cy='1.66683'
                          r='1.66667'
                          transform='rotate(-90 132 1.66683)'
                          fill='#3056D3'
                        />
                      </svg>
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full px-4 lg:w-1/2 xl:w-5/12'>
              <div className='mt-10 lg:mt-0'>
                <h2 className='mb-5 text-3xl font-bold text-base-content sm:text-4xl'>
                  What is SAGI really about?
                </h2>
                <p className='mb-5 text-base-content'>
                  <span className='font-bold text-primary'>SAGI</span> means "
                  <span className='font-bold text-primary'>S</span>
                  olidarite
                  <span className='font-bold text-primary'> Agi</span>ssante",
                  simply the french translation of "Active Solidarity".
                </p>
                <p className='mb-8 text-base text-body-color dark:text-dark-6'>
                  The idea came about in 2009 when we noticed that most of the
                  time, when a Cameroonian died, the family and close friends of
                  the deceased were left to themselves to find ways to organize
                  the burial or repatriation and had to dispatched people to beg
                  for funds at churches' entrances or crossroads, and at the
                  same time the vigils were full of valiant Cameroonians who
                  usually helped, but the aid was dispersed and often never
                  reach the intended recipients.
                </p>
                <p className='mb-8 text-base text-body-color dark:text-dark-6'>
                  SAGI's aim is to bring all Cameroonians and sympathizers ,
                  living in United Sates, together under one group in order to
                  organize the donations so they reach their intended purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .about-img,
  .about-info {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  @media screen and (min-width: 992px) {
    .about-center {
      gap: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .about-img,
    .about-info {
      align-self: center;
    }
  }
  @media screen and (min-width: 1170px) {
    .about-img::before {
      content: '';
      position: absolute;
      border: 0.5rem solid var(--clr-primary-5);
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      top: -1.5rem;
      left: -1.5rem;
      /* z-index: -1; */
    }
    .about-img {
      position: relative;
    }
    .about-photo {
      position: relative;
    }
  }
`;
export default About;
