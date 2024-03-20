import React from 'react';
import PropTypes from 'prop-types';
import link from '../assets/link.svg';

const Project = ({
  name,
  description,
  website,
  laptopImg,
  phoneImg,
  techs,
  idx,
}) => {
  return (
    <div className=''>
      <div className='flex md:inline justify-between'>
        <div className='block sm:hidden -translate-x-[calc(50%-2px)] h-[30px] w-[30px] bg-orange border-[6px] rounded-full border-white dark:border-coke sticky top-1/2'></div>
        <div
          className={`w-11/12 sm:w-full flex flex-col ${
            idx % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'
          } justify-between gap-3 sm:gap-0`}
        >
          <div
            className={`w-full sm:w-5/12 text-left ${
              idx % 2 ? 'sm:text-left' : 'sm:text-right'
            }`}
          >
            <h1 className='text-3xl md:text-5xl font-rowdies static sm:sticky top-1/2 text-coke dark:text-white'>
              {name}
            </h1>
          </div>
          <div className='hidden sm:block h-[40px] w-[40px] bg-orange border-8 rounded-full border-white dark:border-coke sticky top-1/2'></div>
          <div className='w-full sm:w-5/12 font-urbanist font-medium space-y-3 md:space-y-5'>
            <div
              className={`flex gap-1 md:gap-2 font-semibold flex-wrap w-full justify-start ${
                idx % 2 ? 'sm:justify-end' : 'sm:justify-start'
              }`}
            >
              {techs.map((tech, i) => (
                <div
                  key={i}
                  className='py-1 px-3 text-xs md:text-sm bg-coke dark:bg-white text-white dark:text-coke rounded-full font-urbanist capitalize tracking-wide'
                >
                  {tech}
                </div>
              ))}
            </div>
            <p
              className={`text-base md:text-lg lg:text-xl text-coke dark:text-gray-300 text-left ${
                idx % 2 ? 'sm:text-right' : 'sm:text-left'
              }`}
            >
              {description}
            </p>
            <a
              href={website}
              target='_blank'
              rel='noreferrer'
              className={`text-orange flex gap-1 items-center font-semibold italic group justify-start ${
                idx % 2 ? 'sm:justify-end' : 'sm:justify-start'
              }`}
            >
              <img src={link} className='sm:hidden h-7 w-7'></img>
              {idx % 2 ? null : (
                <img src={link} className='hidden sm:block h-7 w-7'></img>
              )}
              <span className='text-base md:text-lg group-hover:underline duration-300'>
                Experience Live
              </span>
              {idx % 2 ? (
                <img src={link} className='hidden sm:block h-7 w-7'></img>
              ) : null}
            </a>
            <div className='pb-[40%] sm:pb-[50%]'>
              <div className='relative'>
                <img
                  src={laptopImg}
                  className='rounded-xl border-2 border-coke dark:border-white'
                ></img>
                <img
                  src={phoneImg}
                  className={`rounded-xl w-1/3 absolute top-1/2 left-[5%] ${
                    idx % 2
                      ? 'sm:right-[5%] sm:left-auto'
                      : 'sm:left-[5%] sm:right-auto'
                  } border-2 border-coke dark:border-white`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  laptopImg: PropTypes.string.isRequired,
  phoneImg: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Project;
