import React from 'react'
import { AdventureContainer, AdventureElement } from './Adventure.styled'
import PaintingImge from '../../../assets/images/artsszone.png';

function Adventure() {
  return (
    <AdventureContainer>
        <AdventureElement>
          <div className='art_section'>
            <div className='images'>
                <img src={PaintingImge} alt="solid"/>
            </div>

            <div className='art_text'>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis soluta amet 
                    facilis dolorum necessitatibus, quasi suscipit excepturi voluptatum adipisci corrupti!</p>

                <button>more about us</button>
            </div>
          </div>
      </AdventureElement>
    </AdventureContainer>
  )
}

export default Adventure