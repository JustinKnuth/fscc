import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import Carousel from 'nuka-carousel';
import './Home.css'
import Review from "../../components/Reviews/Review"

export default function Home(props) {
  const [autoplay, setAutoplay] = useState(false)
  const [wrapAround, setWrapAround] = useState(false)

  useEffect(() => {
    const startAnimation = () => {
      setAutoplay((prevAutoPlay) => !prevAutoPlay)
      setWrapAround((prevWrapAround) => !prevWrapAround)
    }
    startAnimation()
  }, [])
  
  return (
    
    <div className="bg-image">
      <Layout user={props.user}>
          <div  className="carousel">
          <Carousel autoplay={autoplay} wrapAround={wrapAround}>
            <img id="cherry" src="https://images.unsplash.com/photo-1612668196612-70262cad2ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            <img className="imgz" src="https://images.unsplash.com/photo-1475296204602-08d15839e95f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            <img className="imgz" src="https://images.unsplash.com/photo-1472495010058-65576a9959e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80" />
            <img className="imgz" src="https://images.unsplash.com/photo-1570936449947-d0a30aedfff3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
            <img className="imgz" src="https://images.unsplash.com/photo-1441757801704-6a71cffed732?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGNvZmZlZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
          </Carousel>
          
          </div>
        <div className="brand">
          <Link to="/products">
            <div id="shop">
        <h2 id='shop'>Shop</h2>

            </div>
          </Link>
          <div id="statement">

        <h2>All coffee begins with a bloom: an elegant, fragrant white flower. Exceptional coffee, freshly roasted and ground, blooms again when infused with hot water - equally fragrant and even more complex. We care deeply about everything in between these two blooms, from the producers to precision brewing. Our passion for this craft ensures the end result - what’s in your cup - is as beautiful as its beginning.</h2>
          </div>
        </div>
        
      </Layout>
      
    </div>
    
      


    
  )
}
