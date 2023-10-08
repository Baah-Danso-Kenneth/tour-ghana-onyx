import React from 'react'
import { TravelContainer, TravelElement } from './Adventure.styled'
import GroupiesImage from '../../../assets/images/grop.png'

function TravelGroups() {
  return (
    <TravelContainer>
        <TravelElement>
            <div className='group_text'>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis soluta amet 
                    facilis dolorum necessitatibus, quasi suscipit excepturi voluptatum adipisci corrupti!</p>

                <button>more about us</button>
            </div> 

            <div className='images'>
                <img src={GroupiesImage} alt=""/>
            </div>

        </TravelElement>
    </TravelContainer>
  )
}

export default TravelGroups
