import React from 'react'

const HtmlCssJs = () => {
    return (
        <div>
             <section className="projects">
        <div className="max-width">
          <h2 className="title"> HTML,CSS,JS</h2>

        

          <div className="carousel owl-carousel">
            <div className="card">
              <a href="https://gym-website-177d4.web.app/" target="_blank">
                <div className="box">
                  <img src="assets/images/gym website.png" alt="" />
                  <div className="text">
                    Gym <br /> Website
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="https://analog-clock-3.web.app/" target="_blank">
                <div className="box">
                  <img src="assets/images/analog clock.png" alt="" />
                  <div className="text">
                    Analog <br /> Clock
                  </div>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="https://food-ordering-website-2.web.app/">
                <div className="box">
                  <img src="assets/images/my first project.png" alt="" />
                  <div className="text">
                    Food-Ordering <br /> Website
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default HtmlCssJs
