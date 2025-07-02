const Cameroon = () => {
  return (
    <div className='h-screen items-center flex py-20 flex-col '>
      <div className=''>
        <div>
          {/* <Seo title='SAGI' description='Helping people helping themselves' /> */}
          <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
            SAGI Cameroon
          </h1>
          <div className='w-28 mt-3 h-1 bg-cyan-600 mx-auto mb-10'></div>
        </div>
        <p>
          You can now register your loved ones living in CAMEROON with sagiCAM,
          the SAGI organization set up for families living in Cameroon by
          clicking on the link below.
        </p>
        <a
          href='https://www.sagicam.org'
          className='p-2 link link-hover link-primary capitalize text-3xl'
        >
          sagi cameroon
        </a>
      </div>
    </div>
  );
};
export default Cameroon;
