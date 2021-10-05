import React from 'react';
import "./home.css";
import Header from "../Header/index.js";
import Body from "../Body/index.js";
import Footer from "../Footer/index.js";
import Intro from '../Intro/index.js';

function Home() {
    return (
        <div className="home">
            <div>   
              <Header />
          </div>
            <div>
                <Intro />
            </div>
          <div>
              <Body />
          </div>
          <div>
              <Footer />
          </div>
        </div>
    )
}

export default Home
