import React from 'react'
import { SingleTravelContainer, SingleTravelElement } from './Adventure.styled'
import SingleTrop from '../../../assets/images/artsszone.png';


function SingleTravel() {
  return (
    <SingleTravelContainer>
      <SingleTravelElement>
          <div className='image-trop'>
            <img src={SingleTrop} alt=""/>  
          </div>

          <div className='text-trop'>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Libero necessitatibus rerum veritatis numquam tempore quam autem labore sequi totam dolores?</p>
              <button>check it out</button>
          </div>
      </SingleTravelElement>
    </SingleTravelContainer>
  )
}

export default SingleTravel
