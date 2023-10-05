import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { LayoutContainer, LayoutFooter, LayoutHeader, LayoutMainContent } from './Layout.styled'

function Layout({children}:any) {
  return (
    <LayoutContainer>

       <LayoutHeader>
        <Navbar/>
        </LayoutHeader>

          <LayoutMainContent>
            {children}
          </LayoutMainContent>

       <LayoutFooter>
        <Footer/>
        </LayoutFooter>

        </LayoutContainer>
  )
}

export default Layout