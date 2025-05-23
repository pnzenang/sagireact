import { useLoaderData } from 'react-router-dom';
import { ChartContainer, StatsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/members/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
};

const Stats = () => {
  // const { defaultStats, monthlyApplications, delegateDefaultStats } =
  //   useLoaderData();

  const { data } = useQuery(statsQuery);
  const { defaultStats, monthlyApplications, delegateDefaultStats } = data;

  return (
    <div className='w-full'>
      <StatsContainer
        defaultStats={defaultStats}
        delegateDefaultStats={delegateDefaultStats}
      />
      {monthlyApplications?.length > 1 && (
        <ChartContainer data={monthlyApplications} />
      )}
    </div>
  );
};
export default Stats;
