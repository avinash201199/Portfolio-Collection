import React from 'react'
// import "../styles/Services.css"
import "./Navbar"

const Services = () => {
    return (
        <>
            <section class="services" id="services">
                <div class="max-width">
                    <h2 class="title">My services</h2>
                    <div class="serv-content">
                        <div class="card">
                            <div class="box">
                                <i class="fas fa-paint-brush"></i>
                                <div class="text"> Design  and <br/> Development</div>
                                <p>Clean, modern design - for optimized  performance.</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <i class="fas fa-chart-line"></i>
                                <div class="text">Ecommerce <br/> Website</div>
                                <p>custom product template and <br/>more</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <i class="fas fa-code"></i>
                                <div class="text">Mobile-<br/>Friendly</div>
                                <p>A responsive design makes your website accessible to all user.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services
