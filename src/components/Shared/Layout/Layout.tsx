import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMainContent, LayoutNewsLetter } from './Layout.styled'
import NewsLetter from '../Newsletter/NewsLetter'

function Layout({children}:any) {
  return (
    <LayoutContainer>

       <LayoutHeader>
        <Navbar/>
        </LayoutHeader>
          <LayoutMainContent>
            {children}
          </LayoutMainContent>
          
      <LayoutNewsLetter>
         <NewsLetter/> 
      </LayoutNewsLetter>

       <LayoutFooter>
        <Footer/>
        </LayoutFooter>

        </LayoutContainer>
  )
}

export default Layout