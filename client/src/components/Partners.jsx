import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import associations from '../utils/associationList';

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container py-16 sm:py-32  bg-primary text-white'>
      <Slider {...settings}>
        {associations.map((association) => {
          return (
            <div key={association.number}>
              <h1 className='sm:text-4xl font-bold uppercase '>
                {association.name}({association.number})
              </h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default AutoPlay;
