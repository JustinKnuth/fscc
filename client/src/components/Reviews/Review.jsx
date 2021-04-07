import Carousel from "nuka-carousel"
import "./Review.css"

export default function Review() {

  return (
    <div className="review-container">
      <h2>Amazing customer satisfaction</h2>
      <h3>Avg. Rating 4.9 <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span></h3>
      <Carousel>
        <div>
          <h3>John Stevens</h3>
          <p>This is a good st</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
        </div>
        <div>
          <h3>Marta Johnson</h3>
          <p>These are some good sts</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div>
          <h3>Steve Tyler</h3>
          <p>This is some good st</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div>
          <h3>Craig Zimmerman</h3>
          <p>These are good shs</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div>
          <h3>Good Shirt</h3>
          <p>This is a good sht</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div>
          <h3>Good Shirts</h3>
          <p>these are good shts</p>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </Carousel>


    </div>


  )


}