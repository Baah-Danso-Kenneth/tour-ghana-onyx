import React from 'react'
import { FooterContainer, FooterElement } from './Footer.styled'
import AnimeImage from '../../../assets/images/anime.png';
import TayacImage from '../../../assets/images/tiyac.png';
import KenteImage from '../../../assets/images/kente.png';
import TouchEffect from '../../../assets/images/touch.png'


function Footer() {
  return (
    <FooterContainer>
      <FooterElement>

        <div className='sponsors'>
            <img src={AnimeImage} alt="anime"/>
            <img src={TayacImage} alt="tayac"/>
            <img src={KenteImage} alt="kente"/>
            <img src={TouchEffect} alt="touch"/>       
        </div>
         <div className='first_section'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error omnis cumque autem impedit! Ducimus vero incidunt, molestias cum consequatur explicabo et tenetur nam modi magni at ut voluptas. Nesciunt, ullam commodi sit odio quod modi velit blanditiis 
            in eos eum? Ipsa nam, in facere quis deserunt laboriosam aliquid maxime expedita!</p>       
         </div>

         <div className='second_section'>
          <h5>Contacts</h5>
          <p>onyx@gmail.com</p>
          <p>Monday-Friday: 10am -6pm WST</p>
         </div>

         <div className='last_section'>
          <p>  &copy;2023 onyx Travels, all rights reserved. Travels onyx</p>
         </div>
      </FooterElement>
    </FooterContainer>
  )
}

export default Footer