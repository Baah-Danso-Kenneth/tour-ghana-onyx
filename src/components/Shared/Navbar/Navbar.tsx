import React from 'react'
import { NavbarContainer, NavbarLeftSection, NavbarRighttSection } from './Navbar.styled'
import Logo from '../../../assets/images/onyx_logo.png'
import {AiOutlineMenu} from 'react-icons/ai'    

function Navbar() {
  return (
    <NavbarContainer>

      <NavbarLeftSection>
        <ul>
          <li>Small group trips</li>
          <li>destinations</li>
        </ul>
        <div className='logo_div'>
          <p>2023 + 2024 calender</p>
          <img src={Logo} alt="img"/>
        </div>
      </NavbarLeftSection>

      <NavbarRighttSection>
        <ul>
        <li>Custom trips</li>
        <li>Shop</li>
        <li>About</li>
        </ul>
      </NavbarRighttSection>

      <div className='icon_layout'> 
       <AiOutlineMenu className='menu_icon'/>
     </div>

    </NavbarContainer>
  )
}

export default Navbar