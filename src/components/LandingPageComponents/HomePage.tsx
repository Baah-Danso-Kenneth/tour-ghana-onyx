import React from 'react'

import Layout from '../Shared/Layout/Layout';
import Hero from './HeroSection/Hero';
import WhatweDo from './WhatweDo/WhatweDo';
import WhereWeGo from './WhereWeGo/WhereWeGo';
import Recommendation from './Recommendation/Recommendation';
import BusinessTourism from './BusinessOfTourism/BusinessTourism';
import Brand from './Brand/Brand';
import Adventure from './Adventure/Adventure';
import TravelGroups from './Adventure/TravelGroups';
import SingleTravel from './Adventure/SingleTravel';
import KindWords from './KindWords';
import Bookings from './Bookings/Bookings';



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
      <TravelGroups/>
      <SingleTravel/>
      <Bookings/>
      <KindWords/>
      </Layout>
  )
}

export default index