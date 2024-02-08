import React from 'react';

const About = () => {
  return (
    <section name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
      <div className='max-w-screen-lg p-4 flex flex-col justify-center w-full h-full mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='mt-20 text-xl'>
        In the realm of web development, I have honed my skills in crafting visually appealing and responsive websites. Proficient in front-end technologies such as HTML, CSS, and JavaScript, I leverage frameworks like React to bring ideas to life.
        </p><br/>
        <p className='text-xl'>
        My curiosity extends beyond the web, leading me into the exciting world of machine learning. Armed with Python, I have delved into popular libraries such as Scikit-Learn, TensorFlow, and PyTorch. From implementing sentiment analysis using deep learning to developing predictive analytics models, I thrive on the challenge of turning data into actionable insights.
        </p>
      </div>
    </section>
  );
}

export default About;
