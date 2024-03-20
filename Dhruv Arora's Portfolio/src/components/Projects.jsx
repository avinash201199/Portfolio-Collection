import React from 'react';
import devverseLaptop from '../assets/projects/devverseLaptop.png';
import cinevaultLaptop from '../assets/projects/cinevaultLaptop.png';
import nanonotesLaptop from '../assets/projects/nanonotesLaptop.png';
import cinemanLaptop from '../assets/projects/cinemanLaptop.png';
import txtbxLaptop from '../assets/projects/txtbxLaptop.png';
import devversePhone from '../assets/projects/devversePhone.png';
import cinevaultPhone from '../assets/projects/cinevaultPhone.png';
import nanonotesPhone from '../assets/projects/nanonotesPhone.png';
import cinemanPhone from '../assets/projects/cinemanPhone.png';
import txtbxPhone from '../assets/projects/txtbxPhone.png';
import Project from './Project';

const Projects = () => {
  const projects = [
    {
      name: 'DevVerse',
      description:
        "DevVerse is a vibrant online community tailored for developers and programmers. Dive into a space where creativity meets collaboration - create personalized profiles, connect with a global network, and showcase your coding expertise. From creating posts to engaging with like-minded individuals, DevVerse is designed to be a dynamic hub for all things tech. Whether you're an experienced developer or just starting, join DevVerse to explore, connect, and grow together. Welcome to a world where coding meets community!",
      website: 'https://devverse.vercel.app',
      laptopImg: devverseLaptop,
      phoneImg: devversePhone,
      techs: [
        'NodeJS',
        'ExpressJS',
        'ReactJS',
        'MongoDB',
        'Vite',
        'TailwindCSS',
        'Redux',
        'JWT',
      ],
    },
    {
      name: 'CineVault',
      description:
        'CineVault is your cinematic encyclopedia, providing a wealth of information on films and TV series. Explore detailed movie and TV show pages, including plot summaries, cast details, release dates, and more. With an intuitive interface, CineVault is your gateway to the world of movies and TV series.',
      website: 'https://cinevault-cinema.vercel.app',
      laptopImg: cinevaultLaptop,
      phoneImg: cinevaultPhone,
      techs: ['ReactJS', 'Vite', 'TailwindCSS', 'Redux', 'TMDB API'],
    },
    {
      name: 'NanoNotes',
      description:
        "NanoNotes is the ultimate online platform for capturing and organizing your ideas. It is designed to be your digital sanctuary, where you can seamlessly capture and store your thoughts, inspirations, and important information. NanoNotes provides a simple and intuitive website interface that allows you to jot down your notes with ease. Whether you're brainstorming, making to-do lists, or recording important details, NanoNotes is your reliable companion for keeping everything in one place. With NanoNotes, you can effortlessly create and edit your notes, ensuring that your ideas are never lost. The straightforward interface allows you to focus on your thoughts without any distractions, providing a seamless note-taking experience.",
      website: 'https://nanonotes.vercel.app',
      laptopImg: nanonotesLaptop,
      phoneImg: nanonotesPhone,
      techs: ['NodeJS', 'ExpressJS', 'EJS', 'MongoDB', 'Bootstrap', 'OAuth2.0'],
    },
    {
      name: 'Cineman',
      description:
        'Cineman is a free movie streaming web service. It is a simple and easy to use website in which you can choose to watch among a wide variety of popular and famous movies and animes.',
      website: 'https://cineman-movie.vercel.app',
      laptopImg: cinemanLaptop,
      phoneImg: cinemanPhone,
      techs: ['HTML5', 'CSS3', 'JavaScript', 'JSON'],
    },
    {
      name: 'TxTBx',
      description:
        'TxTBx, a game-changer in social sharing, streamlines the creation of text-based posts. Input your name, username, and a compelling message, complemented with your vibrant display picture. Easily toggle between dark and light modes to suit your style. The standout feature? Download your post as an eye-catching image, revolutionizing your online presence. Simplify your social media game - TxTBx awaits your creativity!',
      website: 'https://txtbx.vercel.app',
      laptopImg: txtbxLaptop,
      phoneImg: txtbxPhone,
      techs: ['NodeJS', 'ExpressJS', 'EJS', 'CSS3'],
    },
  ];

  return (
    <div
      id='projects'
      className='py-[80px] md:py-[100px] max-w-7xl mx-auto px-5 md:px-10 lg:px-20'
    >
      <h1 className='text-3xl md:text-5xl font-acme font-normal sm:font-bold text-coke dark:text-white'>
        Some <span className='text-orange'>Projects</span> I made...
      </h1>
      <div className='relative mt-10 md:mt-20 flex flex-col gap-12 sm:gap-28'>
        <div className='w-1 absolute -top-[20px] -bottom-[20px] left-0 sm:left-1/2 sm:-translate-x-1/2 bg-gradient-to-b from-dark-red to-light-red rounded-full opacity-75'></div>
        {projects.map((project, idx) => (
          <Project
            key={idx}
            name={project.name}
            description={project.description}
            website={project.website}
            laptopImg={project.laptopImg}
            phoneImg={project.phoneImg}
            techs={project.techs}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
