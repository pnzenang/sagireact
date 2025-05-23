import React, { useState } from 'react';

const Portfolio = () => {
  const [showCard, setShowCard] = useState('all');

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className='pt-20 pb-12 lg:pt-[120px] lg:pb-10 bg-base-200'>
        <div className='container mx-auto align-element'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[710px] text-center'>
                <h2 className='text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]'>
                  The Highlights of SAGI Journey.
                </h2>
                <p className='text-body-color text-base dark:text-dark-6'>
                  SAGI journey is made up of thousand pieces of small individual
                  successes.
                </p>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-center -mx-4'>
            <div className='w-full px-4'>
              {/* <ul className='flex flex-wrap justify-center mb-12 space-x-1'> */}
              {/* <li className='mb-1'>
                  <button
                    onClick={() => handleProject('all')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'all'
                        ? 'activeClasses bg-primary text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white'
                    }`}
                  >
                    All Projects
                  </button>
                </li> */}
              {/* <li className='mb-1'>
                  <button
                    onClick={() => handleProject('branding')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'branding'
                        ? 'activeClasses bg-primary text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white'
                    }`}
                  >
                    Branding
                  </button>
                </li> */}
              {/* <li className='mb-1'>
                  <button
                    onClick={() => handleProject('design')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'design'
                        ? 'activeClasses bg-primary text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white'
                    }`}
                  >
                    Design
                  </button>
                </li> */}
              {/* <li className='mb-1'>
                  <button
                    onClick={() => handleProject('marketing')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'marketing'
                        ? 'activeClasses bg-primary text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white'
                    }`}
                  >
                    Marketing
                  </button>
                </li> */}
              {/* <li className='mb-1'>
                  <button
                    onClick={() => handleProject('development')}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === 'development'
                        ? 'activeClasses bg-primary text-white'
                        : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white'
                    }`}
                  >
                    Development
                  </button>
                </li> */}
              {/* </ul> */}
            </div>
          </div>
          <div className='flex flex-wrap -mx-4'>
            <PortfolioCard
              ImageHref='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1713371559/reunification_y0i5mh.jpg'
              category='SAGI has shown over the years the real way of uniting Cameroonian people.'
              title='Unity of Cameroonians'
              button='View Details'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://res.cloudinary.com/dp8tkb7hq/image/upload/c_scale,w_800/v1713067973/chefferie_Bamileke_o9sqed.jpg'
              category='Many cameroonian kingdoms has received their fallen sons and daughters with dignity. '
              title='Respect of Kingdoms'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://res.cloudinary.com/dp8tkb7hq/image/upload/c_scale,h_600,w_800/v1713069169/ambassy_dtbsbu.jpg'
              category='In recognition of the service SAGI has rendered, the embassy has taken note. '
              title='The Embassy took note'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://res.cloudinary.com/dp8tkb7hq/image/upload/c_scale,h_600,w_800/v1713069659/plan_of_family_oybuaz.jpg'
              category='Countless families have planned around SAGI for the coverage of their members.'
              title='Plan for Families'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://res.cloudinary.com/dp8tkb7hq/image/upload/c_scale,h_600,w_800/v1713148788/teamwork_g3mhnv.jpg'
              category='For a contribution to come out complete, each association has to do its part.'
              title='Ultimate Teamwork'
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref='https://res.cloudinary.com/dp8tkb7hq/image/upload/c_scale,h_600,w_800/v1713624218/mount_vqjmqv.jpg'
              category='Despite all the difficult situations SAGI has been through, it still stands strong.'
              title='Ancestral Benediction '
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === 'all' || showCard === category.toLowerCase()
            ? 'block'
            : 'hidden'
        }`}
      >
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px]'>
            <img src={ImageHref} alt='portfolio' className='w-full' />
          </div>
          <div className='relative z-10 mx-7 -mt-20 rounded-lg bg-base-300  py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark'>
            <h3 className='text-base-content mb-5 text-xl font-bold'>
              {title}
            </h3>
            <span className='text-primary mb-2 block text-sm font-medium'>
              {category}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
