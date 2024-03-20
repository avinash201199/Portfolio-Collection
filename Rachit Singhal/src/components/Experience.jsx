import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'


const Experience = () => {
    const techs=[
        {
            id: 1,
            src: html,
            title: 'html',
            style : 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'css',
            style : 'shadow-blue-500'
        },
        {
            id: 3,
            src: github,
            title: 'github',
            style : 'shadow-yellow-500'
        },
        {
            id: 4,
            src: javascript,
            title: 'javascript',
            style : 'shadow-blue-500'
        },
        {
            id: 5,
            src: react,
            title: 'react',
            style : 'shadow-gray-500'
        },
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies i've worked with</p>
        </div >
        <div className='w-full grid grid-col-2 sm:grid-cols-3 gap-3 text-center py-8 px-12 sm:px-0'>
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-1-5 furation-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                     </div>
                ))
            }
            
             
        </div>
        </div>
    </div>
  )
}

export default Experience