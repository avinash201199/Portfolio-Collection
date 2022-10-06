import React from 'react'

const Wordpress = () => {
    return (
        <div>
            <section className="projects" id="projects">
        <div className="max-width">
            <div>

          <div className="title_one ">Projects </div>

            </div>
            <br/>
            <br/>
            <br/>
          <h2 className="title">Wordpress</h2>

          <div className="carousel owl-carousel">
            <div className="card">
              <a
                href="http://shopcart-website-pavan.great-site.net/"
                target="_blank"
              >
                <div className="box">
                  <img src="assets/images/ShopCart.png" alt="" />
                  <div className="text">
                    ShopCart  Ecommerce <br /> website
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="http://restutant-by-pavan.rf.gd/" target="_blank">
                <div className="box">
                  <img src="assets/images/restaurant-w.png" alt="" />
                  <div className="text">
                    Restaurant <br /> Website
                  </div>
                </div>
              </a>
            </div>

            <div className="card">
              <a href="http://codesmasher-by-pavan.epizy.com/" target="_blank">
                <div className="box">
                  <img src="assets/images/codesmasher.png" alt="" />
                  <div className="text">
                    Codesmasher <br /> Blog-Website
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

export default Wordpress
