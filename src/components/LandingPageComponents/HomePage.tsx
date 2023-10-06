import React from 'react'

import Layout from '../Shared/Layout/Layout';
import Hero from './HeroSection/Hero';
import WhatweDo from './WhatweDo/WhatweDo';
import WhereWeGo from './WhereWeGo/WhereWeGo';
import Recommendation from './Recommendation/Recommendation';
import BusinessTourism from './BusinessOfTourism/BusinessTourism';
import Brand from './Brand/Brand';
import Adventure from './Adventure/Adventure';



function index() {
  return (
    <Layout>
      <Hero/>
      <WhatweDo/>
      <WhereWeGo/>
      <Recommendation/>
      <BusinessTourism/>
      <Brand/>
      <Adventure/>
      </Layout>
  )
}

export default index