import { useAdminAllMembersContext } from '../pages/AdminAllMembers';
import { AdminComplexPaginationContainer } from '../components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import Member from './Member';
import { useState } from 'react';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Link, useOutletContext, Form } from 'react-router-dom';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
// import { styled } from 'styled-components';
// import dayjs from 'dayjs';

day.extend(advancedFormat);

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-1 pl-1 text-[11px] font-bold  text-white lg:py-6 lg:px-4`,
  TdStyle: `text-dark border-b  border-primary bg-base-100  py-1 pl-12 text-left text-xs  font-bold uppercase`,
  TdStyle2: `text-dark border-b border-primary bg-base-100  py-1 pl-12 text-left text-xs font-bold uppercase`,
};

const AdminAllMembersContainer = () => {
  const { user } = useOutletContext();
  const [layout, setLayout] = useState('list');
  const setActiveStyles = (pattern) => {
    return `text-xl btn  btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'text-primary border-primary rounded-lg'
    }`;
  };
  const { data } = useAdminAllMembersContext();
  const { adminMembers, numOfPages, totalMembers } = data;
  return (
    <section>
      <div className='flex justify-between'>
        <div>
          <h5 className='pb-1 text-2xl'>
            {totalMembers} member{adminMembers.length > 1 && 's'} found
          </h5>
        </div>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
        </div>
      </div>
      <div className=' border-b mt-1 border-primary mx-auto  mb-3'></div>

      <div>
        {adminMembers.length === 0 ? (
          <h4 className='text-2xl mt-16'>
            {' '}
            Welcome Delegate, your association has no members now, please add
            members.
          </h4>
        ) : layout === 'grid' ? (
          <>
            <ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 pb-4 '>
              {adminMembers.map((member) => {
                return <Member key={member._id} {...member} />;
              })}
            </ul>
            {numOfPages > 1 && <AdminComplexPaginationContainer />}
          </>
        ) : (
          <>
            <section className=''>
              <div className=''>
                <div className='flex flex-wrap '>
                  <div className='w-full '>
                    <div className='max-w-full overflow-x-auto'>
                      <table className='w-full table-auto'>
                        <thead className='text-center bg-primary'>
                          <tr>
                            <th className={TdStyle.ThStyle}>
                              {' '}
                              Association Code{' '}
                            </th>
                            <th className={TdStyle.ThStyle}> Matriculation </th>

                            <th className={TdStyle.ThStyle}>
                              Last and Middle Names{' '}
                            </th>
                            <th className={TdStyle.ThStyle}> First Names </th>
                            <th className={TdStyle.ThStyle}>Date of Birth</th>
                            <th className={TdStyle.ThStyle}>Longevity(days)</th>

                            <th className={TdStyle.ThStyle}>
                              {' '}
                              Recommendation{' '}
                            </th>
                            <th className={TdStyle.ThStyle}>Status </th>
                            <th className={TdStyle.ThStyle}> </th>
                          </tr>
                        </thead>
                        <tbody>
                          {adminMembers.map((member) => {
                            console.log(member);
                            const {
                              _id,
                              associationCode,
                              memberMatriculation,
                              firstName,
                              lastAndMiddleNames,
                              dateOfBirth,
                              createdAt,
                              delegateRecommendation,
                              memberStatus,
                            } = member;

                            const time = day(Date.now());
                            const tod = day(createdAt.toString());
                            const m = time.diff(tod, 'days');
                            const matriculationSituation =
                              memberStatus === 'pending' || m < 90
                                ? 'pending'
                                : memberMatriculation;
                            const date = day(createdAt).format('MMM Do, YYYY');
                            const date2 = day(dateOfBirth)
                              .add(22, 'hour')
                              .format('MMM Do, YYYY');
                            return (
                              <tr key={_id}>
                                <td className={TdStyle.TdStyle}>
                                  {associationCode}
                                </td>
                                <td className={TdStyle.TdStyle2}>
                                  {matriculationSituation}
                                </td>

                                <td className={TdStyle.TdStyle2}>
                                  {lastAndMiddleNames}
                                </td>
                                <td className={TdStyle.TdStyle}>{firstName}</td>
                                <td className={TdStyle.TdStyle}>{date2}</td>
                                <td className={TdStyle.TdStyle}>{m}</td>
                                <td className={TdStyle.TdStyle}>
                                  {delegateRecommendation}
                                </td>
                                <td className={TdStyle.TdStyle}>
                                  {memberStatus}
                                </td>
                                <td className={TdStyle.TdStyle}>
                                  <div className=' flex py-2 gap-6 items-center justify-center'>
                                    {user.role === 'user' ? (
                                      <Link
                                        to={`/dashboard/edit-member/${_id}`}
                                        className='btn-xm bg-primary rounded capitalize px-2 py-1 truncate text-white'
                                      >
                                        <FaPencil />
                                      </Link>
                                    ) : (
                                      <>
                                        <Link
                                          to={`/dashboard/admin-edit-member/${_id}`}
                                          className='btn-xm bg-secondary rounded capitalize px-2 py-1 truncate text-white'
                                        >
                                          <FaPencil className='w-4 h-4' />
                                        </Link>
                                        <Form
                                          method='post'
                                          action={`/dashboard/delete-member/${_id}`}
                                        >
                                          <button
                                            type='submit'
                                            className='btn-xs bg-red-600 rounded capitalize px-2 py-1 truncate text-white'
                                          >
                                            <FaTrashCan className='w-4 h-4' />
                                          </button>
                                        </Form>
                                      </>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {numOfPages > 1 && <AdminComplexPaginationContainer />}
          </>
        )}
      </div>
    </section>
  );
};
export default AdminAllMembersContainer;
