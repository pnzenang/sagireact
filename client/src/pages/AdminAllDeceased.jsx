import { toast } from 'react-toastify';
import {
  AdminAllDeceasedContainer,
  AdminAllDeceasedSearchContainer,
} from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData, redirect } from 'react-router-dom';
import { createContext, useContext } from 'react';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get('/users/admin/all-deceased-admin', {
      params,
    });

    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};

const AdminAllDeceasedContext = createContext();

const AdminAllDeceased = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AdminAllDeceasedContext.Provider value={{ data, searchValues }}>
      <AdminAllDeceasedSearchContainer />
      <AdminAllDeceasedContainer />
    </AdminAllDeceasedContext.Provider>
  );
};
export const useAdminAllDeceasedContext = () =>
  useContext(AdminAllDeceasedContext);
export default AdminAllDeceased;
