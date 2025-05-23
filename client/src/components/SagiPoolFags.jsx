import React, { useState } from 'react';
const StateContext = React.createContext();

const SagiPoolFaqs = () => {
  const [openTab, setOpenTab] = useState('1');

  return (
    <>
      <div className='mx-auto mb-[60px]  text-center pt-20 lg:mb-20'>
        <h2 className='mb-4 text-3xl font-bold text-base-content sm:text-[40px]/[48px]'>
          Frequently ask questions about POOL Membership
        </h2>
      </div>
      <StateContext.Provider value={{ openTab, setOpenTab }}>
        <section className='relative z-2 overflow-hidden bg-base-100  dark:bg-dark py-10'>
          <div className='container mx-auto'>
            <div className='-mx-4 flex flex-wrap'>
              <div className='w-full px-4 lg:w-4/12'>
                <div className='mb-10 overflow-hidden rounded bg-base-200 lg:mb-0'>
                  <Button tabNumber='1'>Deposit Payment</Button>
                  <Button tabNumber='2'>Privacy Policy</Button>
                  <Button tabNumber='3'>Meeting Dateline</Button>
                  <Button tabNumber='4'>Knowing everything</Button>
                </div>
              </div>

              <div className='w-full px-4 lg:w-8/12 xl:w-7/12'>
                <div className='lg:pl-8 2xl:pl-[60px]'>
                  <ContentItem
                    tabNumber='1'
                    title='Deposit Payment'
                    text='The SAGI Pool specialist will have to make the decision base on how the member is making his contribution or not.'
                    text2='Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.'
                  >
                    <FeaturesList
                      listNumber='1'
                      listText='Long established fact that a reader will be distracted.'
                    />
                    <FeaturesList
                      listNumber='2'
                      listText='There are many variations of Lorem Ipsum.'
                    />
                    <FeaturesList
                      listNumber='3'
                      listText='The standard chunk of Lorem Ipsum used since for those interested.'
                    />
                  </ContentItem>
                  <ContentItem
                    tabNumber='2'
                    title='Privacy Policy'
                    text="Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved."
                    text2='Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.'
                  >
                    <FeaturesList
                      listNumber='1'
                      listText='Long established fact that a reader will be distracted.'
                    />
                    <FeaturesList
                      listNumber='2'
                      listText='There are many variations of Lorem Ipsum.'
                    />
                    <FeaturesList
                      listNumber='3'
                      listText='The standard chunk of Lorem Ipsum used since for those interested.'
                    />
                  </ContentItem>
                  <ContentItem
                    tabNumber='3'
                    title='Orders'
                    text="Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved."
                    text2='Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.'
                  >
                    <FeaturesList
                      listNumber='1'
                      listText='Long established fact that a reader will be distracted.'
                    />
                    <FeaturesList
                      listNumber='2'
                      listText='There are many variations of Lorem Ipsum.'
                    />
                    <FeaturesList
                      listNumber='3'
                      listText='The standard chunk of Lorem Ipsum used since for those interested.'
                    />
                  </ContentItem>
                  <ContentItem
                    tabNumber='4'
                    title='Product & Stocks'
                    text="Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved."
                    text2='Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.'
                  >
                    <FeaturesList
                      listNumber='1'
                      listText='Long established fact that a reader will be distracted.'
                    />
                    <FeaturesList
                      listNumber='2'
                      listText='There are many variations of Lorem Ipsum.'
                    />
                    <FeaturesList
                      listNumber='3'
                      listText='The standard chunk of Lorem Ipsum used since for those interested.'
                    />
                  </ContentItem>
                  <ContentItem
                    tabNumber='5'
                    title='My Account'
                    text="Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved."
                    text2='Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.'
                  >
                    <FeaturesList
                      listNumber='1'
                      listText='Long established fact that a reader will be distracted.'
                    />
                    <FeaturesList
                      listNumber='2'
                      listText='There are many variations of Lorem Ipsum.'
                    />
                    <FeaturesList
                      listNumber='3'
                      listText='The standard chunk of Lorem Ipsum used since for those interested.'
                    />
                  </ContentItem>
                  <ContentItem
                    tabNumber='6'
                    title='Refund Policy'
                    text="Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved."
                    text2='Placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content.'
                  >
                    <FeaturesList
                      listNumber='1'
                      listText='Long established fact that a reader will be distracted.'
                    />
                    <FeaturesList
                      listNumber='2'
                      listText='There are many variations of Lorem Ipsum.'
                    />
                    <FeaturesList
                      listNumber='3'
                      listText='The standard chunk of Lorem Ipsum used since for those interested.'
                    />
                  </ContentItem>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StateContext.Provider>
    </>
  );
};

export default SagiPoolFaqs;

const Button = ({ children, tabNumber }) => {
  return (
    <StateContext.Consumer>
      {({ openTab, setOpenTab }) => (
        <button
          onClick={() => setOpenTab(tabNumber)}
          className={`block w-full border-l-4 px-7 py-6 text-left text-base-content font-medium md:px-10 lg:px-7 xl:px-10 ${
            tabNumber === openTab
              ? 'border-primary bg-primary/[.13] text-dark dark:bg-dark-2 dark:text-base-content'
              : 'border-transparent text-body-color hover:border-primary hover:text-dark dark:text-dark-6 dark:hover:text-base-content'
          }`}
        >
          {children}
        </button>
      )}
    </StateContext.Consumer>
  );
};

const ContentItem = ({ title, text, text2, children, tabNumber }) => {
  return (
    <StateContext.Consumer>
      {({ openTab }) => (
        <div className={`${openTab === tabNumber ? 'block' : 'hidden'}`}>
          <h2 className='mb-6 text-3xl font-semibold text-base-content'>
            {title}
          </h2>
          <p className='mb-8 text-base leading-relaxed text-body-color dark:text-dark-6'>
            {text}
          </p>
          <p className='mb-8 text-base leading-relaxed text-body-color dark:text-dark-6'>
            {text2}
          </p>
          <div>{children}</div>
        </div>
      )}
    </StateContext.Consumer>
  );
};

const FeaturesList = ({ listNumber, listText }) => {
  return (
    <div className='mb-4 flex'>
      <span className='mr-5 flex h-[30px] w-full max-w-[30px] items-center justify-center rounded-full bg-primary text-sm font-semibold text-white'>
        {listNumber}
      </span>
      <p className='text-base leading-relaxed text-body-color dark:text-dark-6'>
        {listText}
      </p>
    </div>
  );
};
