import { styled } from 'styled-components';
import { RiFocus2Line } from 'react-icons/ri';
import { BsGear } from 'react-icons/bs';
import { LiaToolsSolid } from 'react-icons/lia';

const Services = () => {
  return (
    <Wrapper>
      <div className=''>
        <h1 className='text-3xl sm:text-6xl pt-14 text-center font-bold capitalize text-base-content'>
          Sagi mission
        </h1>
        <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto'></div>
      </div>

      <div className='service-center section-center mt-20 text-center grid gap-5 align-element '>
        <article className='card bg-base-200 hover:bg-base-100 shadow-md rounded-md service hover:text-white p-8 text-center border-2 border-base-100 hover:border-primary'>
          <div className='text-3xl text-base-content '>
            <RiFocus2Line className='text-8xl icon ' />
            <h4 className='font-extrabold my-2 text-base-content'>Objective</h4>
          </div>
          <div className='w-20 h-1 bg-cyan-600 mx-auto hover:bg-gray-200 underline mb-8'></div>

          <p className=' max-w-xl text-lg leading-8 text-base-content '>
            Our objective is to alleviate the financial burden related to the
            funeral of a loved one from the Cameroonian community; anytime that
            a SAGi member passes away, the whole SAGI community come together to
            help the family of the fallen member with the funeral expenses.
          </p>
        </article>
        <article className='card bg-base-200 hover:bg-base-100 shadow-md rounded-md service hover:text-white p-8 text-center border-2 border-base-100 hover:border-primary'>
          <div className='text-3xl text-base-content '>
            <BsGear className='text-8xl icon' />
            <h4 className='font-extrabold my-2 text-base-content'>Strategy</h4>
          </div>
          <div className='w-20 h-1  bg-cyan-600 mx-auto hover:bg-white underline mb-8'></div>

          <p className=' max-w-xl text-lg leading-8 text-base-content'>
            SAGI’s strategy here is to grow its membership in order to reduce
            the individual contribution to less than $1.00 per death while
            minimizing each member monthly contribution by keeping the
            oversights as low as practically possible.
          </p>
        </article>
        <article className='card bg-base-200 hover:bg-base-100 shadow-md rounded-md service hover:text-white p-8 text-center border-2 border-base-100 hover:border-primary'>
          <div className='text-2xl text-base-content '>
            <LiaToolsSolid className='text-8xl flex  justify-center icon' />
            <h4 className='font-extrabold my-2'>Means</h4>
          </div>
          <div className='w-20 h-1  bg-cyan-600 mx-auto underline mb-8'></div>

          <p className=' max-w-xl text-lg leading-8 text-base-content'>
            SAGI is exclusively counting on the togetherness of the cameroonians
            and is working on bringing together all Cameroonians and
            sympathizers living in the USA, and grouped in various associations
            for the awesome purpose of helping each other when one of us passes
            away.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .service {
    transition: all 0.3s linear;
  }

  .service:hover .underline {
    background: white;
    transition: all 0.3s linear;
  }
  .icon {
    margin-left: auto;
    margin-right: auto;
  }
  .service p {
    transition: all 0.3s linear;
  }
  .service .underline {
    height: 2px;
  }

  @media screen and (min-width: 676px) {
    .service-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      /* offset: 2rem; */
    }
  }
  @media screen and (min-width: 992px) {
    .service-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Services;
