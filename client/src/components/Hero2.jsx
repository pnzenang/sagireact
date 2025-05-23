import hero1 from '../assets/solidarity.jpg';
import hero2 from '../assets/protect.jpg';
import hero3 from '../assets/saving2.jpg';
import hero4 from '../assets/heart.jpg';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-24 items-center mt-10 mb-40  '>
      <div className='mt-5'>
        <h1 className='max-w-2xl text-4xl font-bold  sm:text-6xl'>
          <span className=' uppercase text-cyan-600 font-extrabold tracking-wide'>
            sagi:
          </span>
          <span className='sm:text-5xl capitalize text-base-content'>
            {' '}
            active solidarity.
          </span>
        </h1>
        <p className='mt-10 max-w-xl text-lg leading-8 text-base-content '>
          At SAGI, we mimic the african solidarity, making one family&apos;s
          problem the problem of the whole community by putting our effort
          together every time one of our member falls. It is that is the
          hallmark of the African solidarity. making it a little easier for any
          of us, to face up to the adversity of financially taking care of
          expenses related to the funeral of a loved one.
          <br />
          SAGI membership give us a kind of protection and peace of mind and
          moreover, and at SAGI we give with love.
        </p>
      </div>
      <div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                alt=''
                className='rounded-box h-full w-80 object-cover'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
