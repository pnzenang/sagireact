import addition from '../assets/images/addition.png';
import withdrawal from '../assets/images/withdrawal.png';
import nameExchange from '../assets/images/nameExchange.png';
import transfer from '../assets/images/transfer.png';
import contacts from '../assets/images/contacts.png';
import deathAnnouncement from '../assets/images/deathAnnouncement.png';
import ListUpdatesFaqs from './ListUpdatesFaqs';

const Card2 = () => {
  return (
    <section className='bg-base-100 pb-10 pt-20 px-1 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <SingleCard
            image={addition}
            CardTitle='SAGI Addition'
            titleHref='#'
            btnHref='#'
            CardDescription='The Delegate add members to his or her group or association through his dashboard via the link "Add Member", so no more email sent to SAGI administration to request addition.'
          />
          <SingleCard
            image={withdrawal}
            CardTitle='SAGI Withdrawal'
            titleHref='#'
            btnHref='#'
            CardDescription='The delegate signal the withdrawal of members through his dashboard, directly on the member card by clicking on "Delegate Recommendation" and choosing the option: REMOVE.'
          />
          <SingleCard
            image={transfer}
            CardTitle='SAGI Transfer'
            titleHref='#'
            btnHref='#'
            CardDescription='Two delegates should have signaled the transfer of the same member directly on the dashboard by clicking "Delegate Recommendation: and select the option: TRANSFER.'
          />
          <SingleCard
            image={nameExchange}
            CardTitle='Name Change'
            titleHref='#'
            btnHref='#'
            CardDescription='The name change should be done by email. the delegate should  fill form F5 as requested and accompany  with documentation unless it is a mistake on the name requiring change of letters.'
          />
          <SingleCard
            image={deathAnnouncement}
            CardTitle='Death Announcement'
            titleHref='#'
            btnHref='#'
            CardDescription='The death announcement is done straight on the dashboard, but the delegate would have previously declared the member deceased from "Edit Recommendation".'
          />
          <SingleCard
            image={contacts}
            CardTitle='Contact Information '
            titleHref='#'
            btnHref='#'
            CardDescription='The contact information update should be done by email Just like before. The delegate will have to fill out form F6 indicating the name phone number and email address of the new delegate.'
          />
        </div>
      </div>
      <ListUpdatesFaqs />
    </section>
  );
};

export default Card2;

const SingleCard = ({ image, CardDescription, CardTitle }) => {
  return (
    <div className='w-full px-4 lg:w-1/2 xl:w-1/2'>
      <div className='relative z-2 mb-10 block items-center overflow-hidden rounded-lg bg-base-200 sm:flex sm:items-stretch md:items-center lg:block xl:flex xl:items-stretch'>
        <div className='w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-full xl:max-w-[200px] 2xl:max-w-[240px]'>
          <div className='h-[250px] sm:h-full lg:h-[250px] xl:h-full flex items-center justify-center'>
            <img
              src={image}
              alt='image'
              className='h-28 w-28 object-cover object-center m-10'
            />
          </div>
        </div>
        <div className='w-full p-6 sm:py-6 md:py-6'>
          <h3 className='mb-1 block text-xl sm:text-3xl font-semibold text-primary'>
            {CardTitle}
          </h3>
          <p className='mb-5 text-base leading-relaxed text-body-color dark:text-dark-6'>
            {CardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
