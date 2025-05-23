import image from '../assets/person.png';
import { Link, Form, useOutletContext } from 'react-router-dom';
import MemberInfo from './MemberInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { styled } from 'styled-components';

import { CONTRIBUTION_STATUS } from '../../../utils/constants';

day.extend(advancedFormat);

const AdminNecrologyMember = ({
  _id,
  createdAt,
  deceasedAssociationName,
  deceasedFirstName,
  deceasedLastAndMiddleNames,
  deceasedMemberMatriculation,
  deceasedDateOfBirth,
  deceasedCountryOfBirth,
  contributionStatus,
  dateOfDeath,
  placeOfDeath,
  deceasedRegistrationDate,
  indicatorColor,
}) => {
  const dateAnnounced = day(createdAt).format('MMM Do, YYYY');
  const YearOfBirth = day(deceasedDateOfBirth).format('YYYY');
  const YearIfDeath = day(dateOfDeath).format('YYYY');
  dateOfDeath = day(dateOfDeath).add(4, 'hour').format('MMM Do, YYYY');
  deceasedDateOfBirth = day(deceasedDateOfBirth).format('MMM Do, YYYY');
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
      <Link to={`../admin-edit-deceased/${_id}`}>
        <span
          className={`indicator-item indicator-center text-white capitalize badge text-xs sm:text-sm ${indicatorColor}`}
        >
          {contributionStatus}
        </span>
      </Link>
      <div className='card p-4 bg-base-200 shadow-xl '>
        <div className=''>
          <div className=' sm:flex justify-between items-center mb-2'>
            <div className=''>
              <h2 className='  sm:text-xl lg:text-2xl font-bold uppercase text-begin'>
                {deceasedFirstName} {deceasedLastAndMiddleNames}:{' '}
                <span className='text-primary'>
                  {YearOfBirth} ~ {YearIfDeath}
                </span>
              </h2>
            </div>
            <div className='sm:text-xl lg:text-2xl font-bold text-end uppercase '>
              {dateAnnounced}
            </div>
          </div>
          <div className='mb-2 flex items-center justify-between '>
            <p>
              Date of Death:{'  '}
              <span className=' font-bold uppercase'>{dateOfDeath} </span>{' '}
            </p>
            <p>
              Place of Death:{' '}
              <span className=' font-bold uppercase'>{placeOfDeath}.</span>
            </p>
          </div>
          <div className='mb-2 flex items-center justify-between '>
            <p>
              Date of Birth:{'  '}
              <span className=' font-bold uppercase'>
                {deceasedDateOfBirth}{' '}
              </span>{' '}
            </p>
            <p>
              Place of Birth:{' '}
              <span className=' font-bold uppercase'>
                {deceasedCountryOfBirth}.
              </span>
            </p>
          </div>
          <div className='mb-2 flex items-center justify-between'>
            <p>
              Member since:{' '}
              <span className=' font-bold pr-1 uppercase'>
                {deceasedRegistrationDate}
              </span>{' '}
            </p>
            <p>
              Matriculation:
              <span className=' font-bold px-1'>
                {deceasedMemberMatriculation}.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminNecrologyMember;
