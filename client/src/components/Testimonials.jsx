import { BsCloudArrowDown } from 'react-icons/bs';
import { HiArrowPath } from 'react-icons/hi2';
import { IoLockClosedOutline } from 'react-icons/io5';
import { testimonies } from '../utils/testimonies';
import testimonyUser from '../assets/images/testimonyUser.png';

const Testimonial5 = () => {
  return (
    <section className='pb-10 pt-10 dark:bg-dark lg:pb-5 lg:pt-[100px]'>
      <div className='container mx-auto align-element'>
        <div className='-mx-4 flex flex-wrap  justify-center'>
          <div className='w-full px-4'>
            <div className='mb-[60px] max-w-[700px] lg:mb-[70px] text-center mx-auto'>
              <h2 className='mb-3 text-3xl font-bold  leading-[1.2] text-base-content sm:text-4xl md:text-[40px]'>
                What People Say about SAGI !
              </h2>
              <p className='text-base-content'>
                SAGI has brought joy to countless Cameroonian families and today
                has shown the way to so many similar cameroonians
                organizations,and some have voiced their satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap justify-center'>
          <SingleTestimonial
            image={testimonyUser}
            name='Pecky PENE'
            position='President Haut-Nkam Washington DC'
            details='SAGI: UN GROS ET MERVEILLEUX CADEAU DE NOEL POUR TOUS!
Initialement une fete chretienne pour celebrer la naissance du Christ, la fete de Noel est devenu au fil des annees une fete populaire pendant laquelle nous faisons plaisir aux enfants en leur remettant des cadeaux, et aussi une occasion de retrouvaille entre les membres de la famille et les amis.
.'
          />
          <SingleTestimonial
            image={testimonyUser}
            name='Pecky PENE'
            position='President Haut-Nkam Washington DC'
            details=' Deux (2) membres decedes et repatries en 2 ans coutent pres de $300 par membre avec cette ancienne formule inefficace, alors qu’avec la SAGI les memes $300 enveront le corps de plus de 150 freres et soeurs jusque dans leur villages. Les membres de leurs  familles recevront egalement une envelope de pres $5000 (cinq mil dollars) pour l’organisation des obseques.'
          />
          <SingleTestimonial
            image={testimonyUser}
            name='Innocent Chia'
            position='Citizen Journalist.'
            details=' The majority of Cameroonians who are neither home owners nor car owners list the death of a loved one in America as their largest single expenditure – other than a trip to the emergency room…. But that may be over now. An association has come to the rescue with a scheme where members spend a maximum of $15.00 and the corpse is taken all the way to the village in Cameroon.'
          />
          <SingleTestimonial
            image={testimonyUser}
            name='Alliance Tchokonte'
            position='Awesome Group Las Vegas.'
            details=' LE MERVEILLEUX CADEAU DE LA SAGI:  $ 1.95 DE CONTRIBUTION PAR DECES
Il y’a de cela quelques annees seulement, le repatriement de la depouille des camerounais decedes’ aux Etats-Unis etait tres difficile, tres complique’ et tres cher. C’etait l’epreuve la plus terrifiante pour une famille et  une communaute’. Plusieurs solutions ont ete’ experimentees’, mais SAGI a enfin trouve la cle, Dieu merci'
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial5;

const SingleTestimonial = ({ image, name, position, details }) => {
  return (
    <div className='w-full px-4 md:w-1/2 '>
      <div className='relative mb-10 overflow-hidden rounded-[10px] bg-base-200 p-8 shadow-testimonial-6 dark:bg-dark-2 dark:shadow-none sm:p-10 md:px-6 md:py-10 lg:p-10'>
        <div className='mb-8 flex items-center'>
          <div className='mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded md:h-[60px] md:max-w-[60px] lg:h-20 lg:max-w-[80px]'>
            <img src={image} alt='image' className='w-16 ' />
          </div>
          <div className='w-full'>
            <h5 className='mb-1 text-2xl font-semibold text-base-content'>
              {name}
            </h5>
            <p className='text-md text-base-content'>{position}</p>
          </div>
        </div>
        <p className='text-base text-body-color dark:text-dark-6'>
          “{details}”
        </p>
        <div>
          <span className='absolute right-0 top-0'>
            <svg
              width='104'
              height='102'
              viewBox='0 0 104 102'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.6'
                d='M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z'
                stroke='#3056D3'
              />
              <path
                opacity='0.6'
                d='M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z'
                stroke='#13C296'
              />
              <path
                opacity='0.6'
                d='M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z'
                stroke='#F98B69'
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
