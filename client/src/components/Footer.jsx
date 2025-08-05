/* eslint-disable react/prop-types */
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
const Footer = () => {
  return (
    <footer className='relative z-1 bg-emerald-700 '>
      <span className='absolute left-0 top-0 block h-2 w-1/2 bg-primary'></span>
      <span className='absolute right-0 top-0 block h-2 w-1/2 bg-secondary'></span>
      <div className='container mx-auto pt-8 lg:pt-10 align-element'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 sm:w-2/3 lg:w-4/12 xl:w-3/12'>
            <div className='mb-10 w-full'>
              <div className='pb-6'>
                <Logo />
              </div>

              <p className='mb-7 text-base text-gray-7 hover:text-white'>
                SAGI gathers people from all work of life for the awesome
                purpose of helping each other.
              </p>
              <div className='-mx-3 flex items-center hover:text-white'>
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12'></div>

          <LinkGroup header='Organization' className='text-primary'>
            <NavLink link='/#' label='About Our Organization' />
            <NavLink link='/#' label='Organization services' />
            <NavLink link='/#' label='Job opportunities' />
            <NavLink link='/#' label='How it work' />
          </LinkGroup>
          <LinkGroup header='Members' className='text-primary'>
            <NavLink link='/#' label='Membership ' />
            <NavLink link='/#' label='List Updates' />
            <NavLink link='/#' label='Death Announcement' />
            <NavLink link='/#' label='Necrology' />
          </LinkGroup>

          <div className='w-full px-4 sm:w-1/2 lg:w-4/12 2xl:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-primary'>
                Contact Info
              </h4>
              <ul>
                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7 hover:text-white'>
                    <span className='mr-3 mt-[10px]'>
                      <FaRegEnvelope className='w-6 h-6 text-primary ' />
                    </span>
                    info@mySagi.org
                  </p>
                </li>

                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7 hover:text-white'>
                    <span className='mr-3 mt-[10px]'>
                      <FiPhoneCall className='w-6 h-6 text-primary ' />
                    </span>
                    1(804)-214-6390
                  </p>
                </li>

                <li>
                  <div className='inline-flex mb-3  items-start text-base leading-loose text-gray-7'>
                    <div>
                      <span className='mr-3 mt-[10px]'>
                        <HiOutlineBuildingOffice2 className='w-6 h-6 text-primary' />
                      </span>
                    </div>
                    <div className='ml-3 text-xs hover:text-white'>
                      <p>
                        9711 Washingtonian Blvd Suite 550
                        <br /> Gaithersburg MD 20878
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12 bg-emerald-900 py-6 lg:mt-1 '>
        <div className='container mx-auto align-element'>
          <h1 className='text-center'>
            <p className='text-base-content hover:text-white '>
              &copy; 2009 - {new Date().getFullYear()} SAGI: Active Solidarity,
              Ltd <span className='text-primary'> | </span>
              Helps people help each other.
            </p>{' '}
          </h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-3/12 2xl:w-2/12'>
      <div className='mb-10 w-full'>
        <h4 className='mb-9 text-lg font-semibold text-primary'> {header} </h4>
        <ul className='space-y-3'>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ label, link }) => {
  return (
    <li>
      <a
        href={link}
        className='inline-block text-base leading-loose text-gray-7 underline-offset-2 hover:text-white hover:underline'
      >
        {label}
      </a>
    </li>
  );
};
