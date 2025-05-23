import { useAdminAllDeceasedContext } from '../pages/AdminAllDeceased';
import { AdminAllDeceasedComplexPagination } from '../components';
import AdminNecrologyMember from './AdminNecrologyMember';

const AdminAllDeceasedContainer = () => {
  const { data } = useAdminAllDeceasedContext();
  const {
    adminDeceasedMembers,
    numOfPages,
    currentPage,
    totalDeceasedMembers,
  } = data;

  if (adminDeceasedMembers.length === 0)
    return (
      <>
        <h1 className='text-3xl'>No Members to display...</h1>
      </>
    );
  return (
    <>
      <h5 className='pb-2 text-2xl'>
        {totalDeceasedMembers} member{adminDeceasedMembers.length > 1 && 's'}{' '}
        found
      </h5>
      <ul className='grid grid-cols-1 gap-6  '>
        {adminDeceasedMembers.map((member) => {
          return <AdminNecrologyMember key={member._id} {...member} />;
        })}
      </ul>
      {numOfPages > 1 && <AdminAllDeceasedComplexPagination />}
    </>
  );
};
export default AdminAllDeceasedContainer;
