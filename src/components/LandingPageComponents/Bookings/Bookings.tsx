import React from 'react'
import { BookingContainer, BookingElement } from './Bookings.styled'
import LogoImage from '../../../assets/images/onyx_logo.png';
import StarImage from '../../../assets/images/star.png';
import SwimImage from '../../../assets/images/swim-shade.png';
import BookingImage from '../../../assets/images/booking.png';





function Bookings() {
  return (
    <BookingContainer>
        <BookingElement>
            <div className='company-logo'>
                <img src={LogoImage} alt='logo'/>
                </div> 
            <div className='booking_flex'>  
            <div className="first_section">
                <img src={StarImage} alt=""/>
                <h3>Small Groups</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ad hic ea, veniam voluptatum ratione expedita tempore eligendi magnam ipsa saepe recusandae 
                    repellendus sunt blanditiis officiis repellat veritatis. Atque, sunt.</p>
            </div>

            <div className="second_section">
                <img src={SwimImage} alt=""/>
                <h3>Small Groups</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ad hic ea, veniam voluptatum ratione expedita tempore eligendi magnam ipsa saepe recusandae 
                    repellendus sunt blanditiis officiis repellat veritatis. Atque, sunt.</p>
            </div>

            <div className="third_section">
                <img src={BookingImage} alt=""/>
                <h3>Small Groups</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ad hic ea, veniam voluptatum ratione expedita tempore eligendi magnam ipsa saepe recusandae 
                    repellendus sunt blanditiis officiis repellat veritatis. Atque, sunt.</p>
                </div>   
            </div>
        </BookingElement>
    </BookingContainer>
  )
}

export default Bookings
