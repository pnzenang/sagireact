import { toast } from 'react-toastify';
import {
  NecrologyMembersContainer,
  NecrologyMembersSearchContainer,
} from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { createContext, useContext } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { Seo } from '../components/Seo';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  try {
    const { data } = await customFetch.get('/auth/necrology', {
      params,
    });
    console.log(data);
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllNecrologyMembersContext = createContext();

const Necrology = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <section className='my-10 align-element'>
      <Seo title='SAGI' description='Helping people helping themselves' />
      <ScrollToTop smooth color='#0891b2' width='40' />
      <div>
        {/* <Seo title='SAGI' description='Helping people helping themselves' /> */}
        <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
          necrology
        </h1>
        <div className='w-28 mt-3 h-1 bg-cyan-600 mx-auto mb-10'></div>
      </div>
      <AllNecrologyMembersContext.Provider value={{ data, searchValues }}>
        {/* <NecrologyMembersSearchContainer /> */}
        <NecrologyMembersContainer />
      </AllNecrologyMembersContext.Provider>
    </section>
  );
};
export const useAllNecrologyMembersContext = () =>
  useContext(AllNecrologyMembersContext);
export default Necrology;
