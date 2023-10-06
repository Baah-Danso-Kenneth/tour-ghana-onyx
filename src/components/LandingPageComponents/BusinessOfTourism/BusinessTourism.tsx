import React from 'react'
import { BusinessOfTourismContainer, BusinessOfTourismElement } from './Business.styled'
import GroupTour from '../../../assets/images/accra.png'

function BusinessTourism() {
  return (
    <BusinessOfTourismContainer>
        <BusinessOfTourismElement>
            <div>
                <img src={GroupTour} alt=""/>
            </div>

            <h3>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
              
                quas quo corrupti consequatur illum alias veniam? Possimus iusto voluptate totam.</p>
            <button>more about us</button>

        </BusinessOfTourismElement>
    </BusinessOfTourismContainer>
  )
}

export default BusinessTourism