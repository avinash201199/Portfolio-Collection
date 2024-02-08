import React from 'react'
import HeroImage from '../assets/heroImage.png.png'
import {Link} from 'react-scroll'
import { MdOutlineKeyboardArrowRight} from 'react-icons/md';
const Home= () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I love to work on web application using technologies like React, Angular,
                    html, css , javascript, php.
                </p>

                <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} size={50} alt="My Profile" className='rounded-2xl ms-auto w-2/3 md:w-full max-h-96 mx-auto' />
            </div>
       </div>
    </div>
  )
}

export default Home
