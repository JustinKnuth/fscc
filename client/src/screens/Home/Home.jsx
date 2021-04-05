import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import './Home.css'

export default function Home() {
  return (
    <div className="bg-image">
      <Layout>
        <div className="brand">
          <Link>
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
