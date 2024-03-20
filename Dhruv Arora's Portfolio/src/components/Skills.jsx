import React from 'react';
import node from '../assets/skills/node.svg';
import express from '../assets/skills/express.svg';
import react from '../assets/skills/react.svg';
import mongo from '../assets/skills/mongo.svg';
import vite from '../assets/skills/vite.svg';
import tailwind from '../assets/skills/tailwind.svg';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import html from '../assets/skills/html.svg';
import ejs from '../assets/skills/ejs.svg';
import css from '../assets/skills/css.svg';
import javascript from '../assets/skills/javascript.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import next from '../assets/skills/next.svg';
import typescript from '../assets/skills/typescript.svg';
import redux from '../assets/skills/redux.svg';
import cpp from '../assets/skills/cpp.svg';
import codechef from '../assets/skills/codechef.svg';
import codeforces from '../assets/skills/codeforces.svg';
import leetcode from '../assets/skills/leetcode.svg';
import gfg from '../assets/skills/gfg.svg';
import Stack from './Stack';

const Skills = () => {
  const myStack = [
    {
      name: 'NodeJS',
      icon: node,
      tag: 'environment',
      website: 'https://nodejs.org/en',
    },
    {
      name: 'ExpressJS',
      icon: express,
      tag: 'framework',
      website: 'https://expressjs.com',
    },
    {
      name: 'ReactJS',
      icon: react,
      tag: 'library',
      website: 'https://legacy.reactjs.org',
    },
    {
      name: 'MongoDB',
      icon: mongo,
      tag: 'database',
      website: 'https://www.mongodb.com',
    },
    {
      name: 'Vite',
      icon: vite,
      tag: 'tool',
      website: 'https://vitejs.dev',
    },
    {
      name: 'TailwindCSS',
      icon: tailwind,
      tag: 'framework',
      website: 'https://tailwindcss.com',
    },
    {
      name: 'Git',
      icon: git,
      tag: 'tool',
      website: 'https://git-scm.com',
    },
    {
      name: 'GitHub',
      icon: github,
      tag: 'platform',
      website: 'https://github.com',
    },
  ];
  const rareStack = [
    {
      name: 'HTML5',
      icon: html,
      tag: 'language',
      website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      name: 'Embedded JavaScript',
      icon: ejs,
      tag: 'template',
      website: 'https://ejs.co',
    },
    {
      name: 'CSS3',
      icon: css,
      tag: 'language',
      website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      name: 'JavaScript',
      icon: javascript,
      tag: 'language',
      website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'Bootstrap',
      icon: bootstrap,
      tag: 'framework',
      website: 'https://getbootstrap.com',
    },
  ];
  const learnStack = [
    {
      name: 'NextJS',
      icon: next,
      tag: 'framework',
      website: 'https://nextjs.org',
    },
    {
      name: 'TypeScript',
      icon: typescript,
      tag: 'language',
      website: 'https://www.typescriptlang.org',
    },
    {
      name: 'Redux',
      icon: redux,
      tag: 'library',
      website: 'https://redux.js.org',
    },
  ];
  const compProg = [
    {
      name: 'C++',
      icon: cpp,
      tag: 'language',
      website: 'https://isocpp.org',
    },
    {
      name: 'Codechef',
      icon: codechef,
      tag: 'platform',
      website: 'https://www.codechef.com',
    },
    {
      name: 'Codeforces',
      icon: codeforces,
      tag: 'platform',
      website: 'https://codeforces.com',
    },
    {
      name: 'Leetcode',
      icon: leetcode,
      tag: 'platform',
      website: 'https://leetcode.com',
    },
    {
      name: 'GeeksforGeeks',
      icon: gfg,
      tag: 'platform',
      website: 'https://www.geeksforgeeks.org',
    },
  ];

  return (
    <div
      id='skills'
      className='pb-0 md:pb-[100px] pt-[80px] md:pt-[100px] max-w-7xl mx-auto px-5 md:px-10 lg:px-20'
    >
      <h1 className='text-3xl md:text-5xl font-acme font-normal sm:font-bold text-coke dark:text-white'>
        What are <span className='text-orange'>my Skills...</span>
      </h1>
      <div className='mt-4 md:mt-10 space-y-4'>
        <Stack
          stack={myStack}
          title='My Tech Stack'
          subtext='Stuff I use regularly'
        />
        <Stack
          stack={rareStack}
          title='Rare Stack'
          subtext='Stuff I use rarely'
        />
        <Stack
          stack={learnStack}
          title='Learn Stack'
          subtext='Stuff I am learning'
        />
        <Stack
          stack={compProg}
          title='CP'
          subtext='Stuff I use for Competitive Programming'
        />
      </div>
    </div>
  );
};

export default Skills;
