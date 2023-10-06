import React from 'react'
import { BrandContainer, BrandElemet } from './Brand.styled'
import AnimeImage from '../../../assets/images/anime.png';
import TayacImage from '../../../assets/images/tiyac.png';
import KenteImage from '../../../assets/images/kente.png';
import TouchEffect from '../../../assets/images/touch.png'

function Brand() {
  return (
    <BrandContainer>
       <BrandElemet>
          <img src={AnimeImage} alt='anime'/>
          <img src={TouchEffect} alt='anime'/>
          <img src={KenteImage} alt='anime'/>
          <img src={TayacImage} alt='anime'/>
          
       </BrandElemet>
    </BrandContainer>
  )
}

export default Brand