import React from 'react'

import Layout from '../Shared/Layout/Layout';
import Hero from './HeroSection/Hero';
import WhatweDo from './WhatweDo/WhatweDo';
import WhereWeGo from './WhereWeGo/WhereWeGo';



function index() {
  return (
    <Layout>
      <Hero/>
      <WhatweDo/>
      <WhereWeGo/>
      </Layout>
  )
}

export default index