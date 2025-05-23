/* eslint-disable react/prop-types */
import { TbUsersGroup } from 'react-icons/tb';
import { FaSearchDollar } from 'react-icons/fa';
import { TbUserDollar } from 'react-icons/tb';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import pdf from '../documents/contribution.pdf';

let totalContribution = '$200,000';
let totalVestedMember = '11,431';
let contributionPerMember = '$17.50';
let individualContribution = '$1.75';

const Stats2 = () => {
  return (
    <section
      className='  bg-base-200  pt-4  lg:py-10  rounded-xl  '
      id='contribution'
    >
      <div className='mx-auto px-4 sm:container p-10'>
        <div className='mx-auto mb-[20px]  text-center'>
          <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-base-content md:text-6xl '>
            April 2025&apos;s Contributions.
          </h2>
          <p className='text-base-content'>
            Here, we have the detail on this month&apos;s contribution, you can
            also download the contributions table.
          </p>
        </div>
        <div className='-mx-auto  w-full text-center pb-16  '>
          <div className='mb-4 px-2 '>
            <a
              href={pdf}
              className='btn inline-flex border border-transparent bg-primary px-8 py-3 text-base font-medium text-white transition hover:bg-secondary'
            >
              This Month&apos;s Contributions .
            </a>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap  '>
          <StatsItem
            title='target:'
            user={totalContribution}
            detail='Total Contribution'
            icon={<FaSearchDollar className='w-10 h-10' />}
          />
          <StatsItem
            title='from:'
            user={totalVestedMember}
            detail='Vested Members'
            icon={<TbUsersGroup className='w-10 h-10' />}
          />
          <StatsItem
            title='for about:'
            user={contributionPerMember}
            detail='Per member'
            icon={<TbUserDollar className='w-10 h-10' />}
          />
          <StatsItem
            title='and:'
            user={individualContribution}
            detail='Contribution per death'
            icon={<AiOutlineDollarCircle className='w-10 h-10' />}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats2;

const StatsItem = ({ user, title, icon, detail }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-1/4 '>
      <div className=' text-center '>
        <h3 className='mb-4 text-xl sm:text-2xl capitalize'>{title}</h3>
        <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-[15px] bg-base-300 text-primary shadow-1 dark:bg-dark-2 dark:shadow-box-dark'>
          {icon}
        </div>
        <div className=''>
          <h3 className='mb-[10px] text-3xl font-bold leading-[1.2] text-base-content md:text-6xl'>
            {user}
          </h3>
          <p className='w-48 text-lg text-body-color dark:text-dark-6  mx-auto'>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};
