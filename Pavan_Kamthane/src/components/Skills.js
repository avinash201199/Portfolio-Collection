import React from 'react'
// import "../styles/Skills.css"
import "./Navbar"

const Skills = () => {
    return (
        <>
            <section class="skills" id="skills">
                <div class="max-width">
                    <h2 class="title">My skills</h2>
                    <div class="skills-content">
                        <div class="column left">
                            {/* <div class="text">My creative skills & experiences.</div> */}
                            
                        </div>
                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div class="line html"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>85%</span>
                                </div>
                                <div class="line css"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>80%</span>
                                </div>
                                <div class="line js"></div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>React JS</span>
                                    <span>75%</span>
                                </div>
                                <div class="line reactjs"></div>
                            </div>


                            <div class="bars">
                                <div class="info">
                                    <span>Wordpress</span>
                                    <span>90%</span>
                                </div>
                                <div class="line wordpress"></div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
