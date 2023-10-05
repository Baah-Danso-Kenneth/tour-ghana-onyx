import React from 'react'
import { DestinationCardContainer } from './Cards.styled';

interface DestinationProps{
    src:string;
    itenary:string;
    name:string;
    icon:string
}

function DestinationCard({name, itenary, src, icon}:DestinationProps) {
  return (
    <DestinationCardContainer>
        <div className='img_ptag'>
            <img src={src} alt=""/>
            <p>{name}</p>
          
        </div>

        <div className="itenary">
         <h3>{itenary}</h3>
         <p>{icon}</p>
      </div>
    </DestinationCardContainer>
  )
}

export default DestinationCard