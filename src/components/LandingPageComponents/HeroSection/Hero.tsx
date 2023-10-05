import React from 'react'
import { HeroContainer } from './Hero.styled'
import BannerImage from '../../../assets/images/scenery.jpg';


function Hero() {
  return (
    <HeroContainer>
        <div className='hero_img'>
           <img src={BannerImage} alt=""/>
        </div>
      <div className='hero_statement'>
        <p>
            Change awaits in the journey and destination 
        </p>
      </div>
    </HeroContainer>
  )
}

export default Hero