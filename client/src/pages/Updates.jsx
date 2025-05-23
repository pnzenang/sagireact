import { updateInfo } from '../utils/updateInfo';
import styled from 'styled-components';
import ScrollToTop from 'react-scroll-to-top';
import MonthlyContribution from '../components/MonthlyContribution';
import FallenMembers from '../components/FallenMembers';
import MonthAtGlance from '../components/MonthAtGlance';
import VestedMembers from '../components/VestedMembers';
import { Seo } from '../components/Seo';

const Updates = () => {
  return (
    <Wrapper>
      <section className=' my-10  '>
        <Seo title='SAGI' description='Helping people helping themselves' />
        <ScrollToTop smooth color='#0891b2' width='40' />
        <div>
          <div className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content '>
            updates
          </div>
          <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto   '></div>
        </div>
      </section>
      <ul className='grid sm:grid-cols-2 gap-4 my-20 align-element '>
        {updateInfo.map((update) => {
          return (
            <li key={update.id}>
              <a href={update.href}>
                <div className='card  bg-base-200 hover:bg-base-100 border-2 border-base-100 hover:border-primary hover:shadow-lg text-base-content'>
                  <div className='card-body'>
                    <h2 className='card-title text-3xl font-bold'>
                      {update.title}
                    </h2>
                    <p>{update.detail}</p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <MonthAtGlance />
      <VestedMembers />
      <FallenMembers />
      <MonthlyContribution />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .calendar {
    @media screen and (min-width: 576px) {
      visibility: visible;
    }
  }
`;
export default Updates;
