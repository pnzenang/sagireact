import { useAllNecrologyMembersContext } from '../pages/Necrology';
import { NecrologyComplexPagination } from '../components';

import Member from './Member';
import PageBtnContainer from './PageBtnContainer';
import DeceasedMember from './NecrologyMember';

const NecrologyMembersContainer = () => {
  const { data } = useAllNecrologyMembersContext();
  const {
    necrology,
    membersForAnnouncement,
    numOfPages,
    currentPage,
    totalMembers,
  } = data;

  if (necrology.length === 0)
    return (
      <>
        <h1 className='text-3xl h-screen text-gray-500'>
          Welcome, There is no death at SAGI at this time to display... thank
          God, please check back later.
        </h1>
      </>
    );
  return (
    <>
      <h5 className='pb-2 text-2xl text-gray-500'>
        {totalMembers} member{necrology.length > 1 && 's'} found.
      </h5>
      <ul className='grid grid-cols-1 gap-6  pb-4 text-gray-500'>
        {necrology.map((member) => {
          return <DeceasedMember key={member._id} {...member} />;
        })}
      </ul>
      {numOfPages > 1 && <NecrologyComplexPagination />}
      {}
    </>
  );
};
export default NecrologyMembersContainer;
