import React from 'react';
import Typed from 'typed.js';
import './Hero.css'

const Hero = () => {

     
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Programmer   ', 'Competive Programmer   ','Full-Stack Developer   ','Blockchain Enthusiast   ','React Developer    '],
        typeSpeed: 100,
        backSpeed:100,
        smartBackspace:true,
        loop:true,
        shuffle:true,
        cursorChar:'>',
    });

    return () => {
      typed.destroy();
    };
  }, []);


    return (
        <>
            <section className="hero-container">
                <div className="hero-content">    

                    
                    <h2>I<b className='pq'>'</b>m <b className='pq'>a</b> <span ref={el}/> </h2>
                    <p>
                    Competitive Programmer | FullStack Developer | Blockchain Enthusiast | DSCE'26 Artificial Intelligence, Machine Learning|                        
                    </p>
                </div>
                <div className="hero-img">
                    <div>
                        <div className="personalImage">                        
                            <img src='./personalPhotos.jpg' alt="mee" />
                        </div>
                    </div>
                    <div>
                        <div className="tech-icon">
                           <a href="https://www.instagram.com/rahul._38_/"  target="_blank"> <img src="./insta.png" alt="insta" /></a>
                        </div>
                        <div className="tech-icon">
                        <a href="https://x.com/tRahulPrabhu38"  target="_blank" > <img src="x.png" alt="x" /></a>
                        </div>
                        <div className="tech-icon">
                        <a href="https://www.linkedin.com/in/trahulprabhu38/"  target="_blank" > <img src="linkedIn.png" alt="insta" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;