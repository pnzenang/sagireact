import {
  Hero,
  // Statistics,
  Partners,
  Mission,
  Testimonials2,
  HighLights,
} from '../components';
// import Testimonials from '../components/Testimonials';
// import Home from './Home';
import ScrollToTop from 'react-scroll-to-top';
import MonthlyContribution from '../components/MonthlyContribution';
import { Seo } from '../components/Seo';
Seo;

const Landing = () => {
  return (
    <section className='my-10 '>
      <Seo title='SAGI' description='Helping people help themselves' />
      <ScrollToTop smooth color='#0891b2' width='40' />
      <Hero />
      <MonthlyContribution />
      {/* <Statistics /> */}
      <Mission />
      <Partners />
      {/* <Testimonials /> */}
      <HighLights />
      <Testimonials2 />
    </section>
  );
};
export default Landing;
