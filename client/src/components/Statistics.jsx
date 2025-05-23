import React from 'react';
import { LuUsers } from 'react-icons/lu';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { TbUserDollar } from 'react-icons/tb';
import { GiMoneyStack } from 'react-icons/gi';

const Stats2 = () => {
  return (
    <section className='bg-base-200 py-10  lg:py-20  '>
      <div className='mx-auto px-10 sm:container align-element'>
        <div className='-mx-4 flex flex-wrap '>
          <StatsItem
            user='11,500+'
            title='Vested members'
            icon={<LuUsers className='w-10 h-10 text-primary' />}
          />
          <StatsItem
            user='300+'
            title='Active Associations'
            icon={<FaUsersViewfinder className='w-10 h-10 text-primary' />}
          />
          <StatsItem
            user='$20,000'
            title='Payout per death'
            icon={<TbUserDollar className='w-10 h-10 text-primary' />}
          />
          <StatsItem
            user='$10,000,000+'
            title='Total Payouts to date'
            icon={<GiMoneyStack className='w-10 h-10 text-primary' />}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats2;

const StatsItem = ({ user, title, icon }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
      <div className='mb-10 text-center'>
        <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-[15px]  text-primary shadow-1 bg-base-300 dark:shadow-box-dark'>
          {icon}
        </div>
        <div>
          <h3 className='mb-[10px] text-3xl font-bold leading-[1.2] lg:text-5xl xl:text-[40px]'>
            {user}
          </h3>
          <p className='text-lg text-primary'>{title}</p>
        </div>
      </div>
    </div>
  );
};

// import trustImage from '../assets/images/trust.jpeg';

// const stats = [
//   { id: 1, name: 'Registered members', value: '10,000+' },
//   { id: 2, name: 'Contribution/member/death', value: '<$2' },
//   { id: 3, name: 'Associations ', value: '300+' },
//   { id: 4, name: 'Paid out to families', value: '$7M+' },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// const Statistics = () => {
//   return (
//     <div className='relative bg-base-200 rounded-xl '>
//       <img
//         className='h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0  lg:h-full lg:w-1/2 rounded-xl'
//         src={trustImage}
//         alt='image'
//       />
//       <div className='mx-auto grid max-w-7xl lg:grid-cols-2 rounded-lg'>
//         <div className='px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32'>
//           <div className='mx-auto max-w-2xl lg:mr-0 lg:max-w-lg'>
//             <p className='mt-2 text-3xl font-bold tracking-tight  sm:text-4xl text-base-content'>
//               Trusted by thousands of Cameroonians and sympathizers across the
//               country.
//             </p>
//             <p className='mt-6 text-lg leading-8 text-base-content'>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
//               impedit perferendis suscipit eaque, iste dolor cupiditate
//               blanditiis ratione.
//             </p>
//             <dl className='mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-8 text-base-content'>
//               {stats.map((stat) => (
//                 <div
//                   key={stat.id}
//                   className='flex flex-col gap-y-3 border-l  pl-6'
//                 >
//                   <dt className='text-sm leading-6 '>{stat.name}</dt>
//                   <dd className='order-first text-4xl font-semibold tracking-tight '>
//                     {stat.value}
//                   </dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Statistics;
