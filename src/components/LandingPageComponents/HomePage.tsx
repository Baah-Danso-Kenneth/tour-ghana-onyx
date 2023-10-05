import React from 'react'

import Layout from '../Shared/Layout/Layout';
import Hero from './HeroSection/Hero';
import WhatweDo from './WhatweDo/WhatweDo';



function index() {
  return (
    <Layout>
      <Hero/>
      <WhatweDo/>
      </Layout>
  )
}

export default index