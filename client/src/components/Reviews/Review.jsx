import Carousel from "nuka-carousel"
import "./Review.css"

export default function Review() {

  return (
    <div className="review-container">
      <h2>Amazing Customer Satisfaction</h2>
      <h3>Avg. Rating 4.9 <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span></h3>
      <Carousel>
        <div>
          <h4>John Stevens</h4>
          <p>I really love Full Stack Coffee. The customer service is amazing. It feels personal. Keeo up the good work!!!!</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </div>
        <div>
          <h4>Marta J.</h4>
          <p>I ordered an espresso machine from this place and it arrived really fast. I am so satisfied with this company. They are always available by phone if you have any questions</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div>
          <h4>Steve Tyler</h4>
          <p>Overall great experience. Stellar customer service and the products they sell have helped me become the home barista I always wanted to be. </p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div>
          <h4>Craig Zimmerman</h4>
          <p>Thanks to these guys, I haven't gone to Starbucks in 2 years. COFFEE SHOULDN'T BE INDUSTRIALIZED STARBUCKS!!SHAME!!SHAME!!SHAME!!</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div>
          <h4>Wilson</h4>
          <p>Full Stack is everything. On a scale from 1 to 10, I give this site a million. Super easy to use and I was sipping espesso within 2 days. Awesome sauce</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
        <div>
          <h4>Greg</h4>
          <p>WHAT WOULD I DO WITHOUT YOU. I need you. I want you. No more Dunkin Donuts. </p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </div>
      </Carousel>


    </div>


  )


}