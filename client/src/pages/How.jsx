import { useState } from 'react';

import ScrollToTop from 'react-scroll-to-top';
import Registration from '../components/Registration';
import ListUpdates from '../components/ListUpdates';
import SagiPool from '../components/SagiPool';
import Membership from '../components/Membership';
import { Seo } from '../components/Seo';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className='flex flex-wrap'>
        <Seo title='SAGI' description='Helping people helping themselves' />
        <div className='align-element'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 gap-4 align-element'
            role='tablist'
          >
            <li className='-mb-px  last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + ''
                    : 'text-base-content bg-base-200')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Membership
              </a>
            </li>
            <li className='-mb-px  last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase  py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color + ''
                    : 'text-base-content bg-base-200')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                REGISTRATION
              </a>
            </li>
            <li className='-mb-px  last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color + ''
                    : 'text-base-content bg-base-200')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                List updates
              </a>
            </li>
            {/* <li className='-mb-px  last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 4
                    ? 'text-white bg-' + color + ''
                    : 'text-base-content bg-base-200')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle='tab'
                href='#link4'
                role='tablist'
              >
                Sagi Pool
              </a>
            </li> */}
          </ul>
          <div className='relative flex flex-col min-w-0 break-words  w-full mb-6  '>
            <div className=' py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <Membership />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <Registration />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <ListUpdates />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id='link4'>
                  <SagiPool />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <section className=' my-10'>
      <ScrollToTop smooth color='#0891b2' width='40' />
      <div>
        <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content'>
          How it works?
        </h1>
        <div className='w-28 mt-3 h-1 bg-cyan-600 mx-auto mb-20'></div>
      </div>
      <Tabs color='primary' />
    </section>
  );
}
