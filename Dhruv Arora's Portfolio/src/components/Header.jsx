import React, { useRef, useState } from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  const navSelect = useRef();
  const hamSelect = useRef();
  const opacityLayerSelect = useRef();

  window.onscroll = () => {
    window.scrollY > 100
      ? navSelect.current?.classList.add('bg-white')
      : navSelect.current?.classList.remove('bg-white');
    window.scrollY > 100
      ? navSelect.current?.classList.add('dark:bg-coke')
      : navSelect.current?.classList.remove('dark:bg-coke');
    window.scrollY > 100
      ? navSelect.current?.classList.add('h-16')
      : navSelect.current?.classList.remove('h-16');
    window.scrollY > 100
      ? navSelect.current?.classList.remove('h-24')
      : navSelect.current?.classList.add('h-24');
    window.scrollY > 100
      ? hamSelect.current?.classList.remove('top-24')
      : hamSelect.current?.classList.add('top-24');
    window.scrollY > 100
      ? hamSelect.current?.classList.add('top-16')
      : hamSelect.current?.classList.remove('top-16');
    window.scrollY > 100
      ? opacityLayerSelect.current?.classList.remove('top-24')
      : opacityLayerSelect.current?.classList.add('top-24');
    window.scrollY > 100
      ? opacityLayerSelect.current?.classList.add('top-16')
      : opacityLayerSelect.current?.classList.remove('top-16');
    window.scrollY > 100
      ? opacityLayerSelect.current?.classList.remove('bg-transparent')
      : opacityLayerSelect.current?.classList.add('bg-transparent');
    window.scrollY > 100
      ? opacityLayerSelect.current?.classList.add('bg-coke')
      : opacityLayerSelect.current?.classList.remove('bg-coke');
  };

  const [hamMenu, setHamMenu] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 h-24 z-10' ref={navSelect}>
      <div className='max-w-7xl mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center h-full'>
        <div className='text-4xl md:text-5xl font-rowdies text-orange'>
          <a href='/'>DA</a>
        </div>
        <ul className='text-coke dark:text-white font-urbanist font-semibold tracking-wider text-lg hidden md:flex gap-6 lg:gap-10'>
          <li>
            <a href='#' className='hover:text-orange duration-200'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='hover:text-orange duration-200'>
              About
            </a>
          </li>
          <li>
            <a href='#skills' className='hover:text-orange duration-200'>
              Skills
            </a>
          </li>
          <li>
            <a href='#projects' className='hover:text-orange duration-200'>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-orange duration-200'>
              Contact
            </a>
          </li>
        </ul>
        <div className='flex gap-5 justify-center items-center'>
          <DarkModeSwitcher />
          <div className='md:hidden' onClick={() => setHamMenu(!hamMenu)}>
            <div
              className={`${
                hamMenu ? '-rotate-45 translate-y-[1px]' : 'rotate-0'
              } h-[2px] w-6 bg-coke dark:bg-white rounded-full duration-200`}
            ></div>
            <div
              className={`${
                hamMenu ? 'hidden' : 'block'
              } my-1.5 h-[2px] w-6 bg-coke dark:bg-white rounded-full duration-200`}
            ></div>
            <div
              className={`${
                hamMenu ? 'rotate-45 -translate-y-[1px]' : 'rotate-0'
              } h-[2px] w-6 bg-coke dark:bg-white rounded-full duration-200`}
            ></div>
          </div>
          {hamMenu && (
            <div
              className={`fixed bottom-0 left-0 sm:left-auto right-0 text-center pt-2 px-5 md:px-10 lg:px-20 top-${
                window.scrollY > 100 ? '16' : '24'
              }`}
              ref={hamSelect}
            >
              <div
                className={`fixed left-0 right-0 bottom-0 top-${
                  window.scrollY > 100 ? '16' : '24'
                } ${
                  window.scrollY > 100 ? 'bg-coke' : 'bg-transparent'
                } bg-opacity-20 dark:bg-opacity-50 -z-10`}
                ref={opacityLayerSelect}
                onClick={() => setHamMenu(false)}
              ></div>
              <ul className='text-coke dark:text-white font-urbanist font-semibold tracking-wider text-lg flex flex-col gap-5 backdrop-blur-xl rounded-xl p-5 min-w-60 border border-coke dark:border-white animate-zoom'>
                <li onClick={() => setHamMenu(false)}>
                  <a href='#' className='hover:text-orange duration-200'>
                    Home
                  </a>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <a href='#about' className='hover:text-orange duration-200'>
                    About
                  </a>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <a href='#skills' className='hover:text-orange duration-200'>
                    Skills
                  </a>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <a
                    href='#projects'
                    className='hover:text-orange duration-200'
                  >
                    Projects
                  </a>
                </li>
                <li onClick={() => setHamMenu(false)}>
                  <a href='#contact' className='hover:text-orange duration-200'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
