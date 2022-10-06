import React from 'react'
// import "../styles/responsive.css"
// import "../styles/Home.css"
import "./Navbar"

const Home = () => {
    return (
        <div>
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content">
                        <div class="text-1">Hello, my name is</div>
                        <div class="text-2"> Pavan Kamthane</div>
                        <div class="text-3">And I'm a <span class="typing"></span></div>
                        <a href="#contact">Hire me</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
