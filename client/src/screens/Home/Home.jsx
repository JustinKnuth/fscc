import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import Carousel from "nuka-carousel";
import Review from '../../components/Reviews/Review';
import "./Home.css";
import axios from "axios";
import News from "../../components/News/News"

export default function Home(props) {
  const [autoplay, setAutoplay] = useState(false);
  const [wrapAround, setWrapAround] = useState(false);
  const [news, setNews] = useState([])

  useEffect(() => {
    const startAnimation = () => {
      setAutoplay((prevAutoPlay) => !prevAutoPlay);
      setWrapAround((prevWrapAround) => !prevWrapAround);
    };
    startAnimation();
  }, []);


  useEffect(() => {
    const getNews = async () => {
      let url = "https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=coffee&pageSize=6&language=en&sortBy=popularity&apiKey=90227dcd441a4362b5c3669eb2b7e229"
      let res = await axios.get(url)
      console.log(res.data.articles)
      setNews(res.data.articles)

    }
    getNews()
  }, [])




  return (







    <div className="bg-image">
      <Layout user={props.user}>
        <div className="carousel">
          <Carousel autoplay={autoplay} wrapAround={wrapAround}>
            <img
              id="cherry"
              src="https://images.unsplash.com/photo-1612668196612-70262cad2ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="coffee plant"
            />
            <img
              className="imgz"
              src="https://images.unsplash.com/photo-1475296204602-08d15839e95f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="espresso pouring into cup"
            />
            <img
              className="imgz"
              src="https://images.unsplash.com/photo-1472495010058-65576a9959e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
              alt="coffee plant with hand"
            />
            <img
              className="imgz"
              src="https://images.unsplash.com/photo-1570936449947-d0a30aedfff3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="coffee roaster"
            />
            <img
              className="imgz"
              src="https://images.unsplash.com/photo-1441757801704-6a71cffed732?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGNvZmZlZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="coffee beans in roaster"
            />
          </Carousel>
        </div>
        <div className="brand">
          <Link to="/products">
            <div id="shop">
              <h2 id="shop">Shop</h2>
            </div>
          </Link>
          <div id="statement">
            <h2>
              All coffee begins with a bloom: an elegant, fragrant white flower.
              Exceptional coffee, freshly roasted and ground, blooms again when
              infused with hot water - equally fragrant and even more complex.
              We care deeply about everything in between these two blooms, from
              the producers to precision brewing. Our passion for this craft
              ensures the end result - what’s in your cup - is as beautiful as
              its beginning.
            </h2>
          </div>
        </div>
      </Layout>
      <div className="brand-pic">
        <img
          id="hario"
          src="https://foodlifedesign.blog/wp-content/uploads/2018/01/HARIO_logo.jpg"
          alt="hario"
        />

        <img
          id="marzocco"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.barista.gr%2Fcontent%2Fimages%2Fthumbs%2F0019094_la-marzocco.jpeg&f=1&nofb=1"
          alt="marzocco"
        />

        <img
          id="kalita"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kalita_Logo_small.svg/1200px-Kalita_Logo_small.svg.png"
          alt="kalita"
        />

        <img
          id="fellow"
          src="https://cdn.shopify.com/s/files/1/0280/5548/collections/Fellow-Logo-1024x1024_1024x1024.jpg?v=1531489759"
          alt="fellow"
        />

        <img
          id="bialetti"
          src="https://peppercorn.net/image/cache/data/bialetti/Bialetti-logo-220x230.jpg"
          alt="bialetti"
        />
      </div>

      <Review />

      <h2 className="coffee-news-container">coffee news</h2>

      {news.map((item, index) => (
        <News key={index}
          article={item}
          index={index} />
      ))}
    </div>

  );
}
