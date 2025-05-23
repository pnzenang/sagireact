import image from '../assets/person.png';
import { Link, Form, useOutletContext } from 'react-router-dom';
import MemberInfo from './MemberInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { styled } from 'styled-components';
import { deathAnnouncement, comfortMessage } from '../utils/constants';
import { CONTRIBUTION_STATUS } from '../../../utils/constants';

day.extend(advancedFormat);

const NecrologyMember = ({
  createdAt,
  deceasedAssociationName,
  deceasedFirstName,
  deceasedLastAndMiddleNames,
  deceasedMemberMatriculation,
  deceasedDateOfBirth,
  contributionStatus,
  dateOfDeath,
  placeOfDeath,
  deceasedRegistrationDate,
  indicatorColor,
}) => {
  const dateAnnounced = day(createdAt).format('MMM Do, YYYY');
  const YearOfBirth = day(deceasedDateOfBirth)
    .add(23, 'hour')
    .format('MMM D, YYYY');

  const YearOfDeath = day(dateOfDeath).add(4, 'hour').format('MMM D, YYYY');
  dateOfDeath = day(dateOfDeath).format('MMM Do, YYYY');
  deceasedRegistrationDate = day(deceasedRegistrationDate).format(
    'MMM Do, YYYY'
  );
  const time = day(dateOfDeath.toString());
  const tod = day(createdAt.toString());

  if (
    contributionStatus ===
    CONTRIBUTION_STATUS.CONTRIBUTION_COMPLETED_AND_CHECK_ISSUED
  ) {
    indicatorColor = 'bg-green-600 ';
  }
  if (contributionStatus === CONTRIBUTION_STATUS.DENIED_FOR_NONCOMPLIANCE) {
    indicatorColor = 'bg-red-500';
  }
  if (
    contributionStatus === CONTRIBUTION_STATUS.UNDER_REVIEW_PENDING_CONTRIBUTION
  ) {
    indicatorColor = 'bg-amber-500';
  }
  return (
    <div className='indicator card w-auto'>
      <span
        className={`indicator-item indicator-center text-white capitalize badge text-xs sm:text-sm ${indicatorColor}`}
      >
        {contributionStatus}
      </span>

      <div className='card p-4 bg-base-200 shadow-xl '>
        <div className=' sm:flex   items-stretch gap-4'>
          <div className='avatar flex justify-center '>
            <div className='w-52  rounded '>
              <img src={image} alt='image' className='text-primary' />
            </div>
          </div>
          <div className=''>
            <div className=' sm:flex justify-between items-center mb-2'>
              <div className=''>
                <h2 className='  sm:text-xl lg:text-2xl font-bold uppercase text-begin'>
                  {deceasedFirstName} {deceasedLastAndMiddleNames}:{' '}
                  <span className='text-primary capitalize'>
                    {YearOfBirth} ~ {YearOfDeath}
                  </span>
                </h2>
              </div>
              <div className='sm:text-xl lg:text-2xl font-bold text-end uppercase '>
                {dateAnnounced}
              </div>
            </div>
            <div className='mb-2'>
              <p>
                {deathAnnouncement[Math.floor(Math.random() * 5)]}
                <span className='uppercase font-bold px-1'>
                  {deceasedFirstName} {deceasedLastAndMiddleNames}
                </span>
                which occurred on{' '}
                <span className=' font-bold uppercase'>{YearOfDeath} </span> in{' '}
                <span className=' font-bold uppercase'>{placeOfDeath}.</span>
              </p>
            </div>
            <div className='mb-2'>
              <p>
                <span className='uppercase font-bold pr-1'>
                  {deceasedFirstName} {deceasedLastAndMiddleNames}
                </span>
                was an unconditional SAGI member since{' '}
                <span className=' font-bold pr-1 uppercase'>
                  {deceasedRegistrationDate}
                </span>{' '}
                and before leaving us,{' '}
                <span className='uppercase font-bold px-1'>
                  {deceasedFirstName} {deceasedLastAndMiddleNames}
                </span>{' '}
                was affiliated with the association:
                <span className='uppercase font-bold px-1'>
                  {deceasedAssociationName}
                </span>
                under the matriculation:
                <span className=' font-bold px-1'>
                  {deceasedMemberMatriculation}.
                </span>
              </p>
            </div>
            <p>
              {comfortMessage[Math.floor(Math.random() * 3)]}
              {/* <span className='capitalize '>
              <Link to='/' className=' text-primary'>
                read more
              </Link>
            </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NecrologyMember;
