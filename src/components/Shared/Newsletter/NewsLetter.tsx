import React from 'react'
import { NewsLetterContainer, NewsLetterElement } from './NewsLetter.styled'

function NewsLetter() {
  return (
    <NewsLetterContainer>
      <NewsLetterElement>
         <div className='newsletter-notes'>
            <h3>Join the travelling Clique</h3>
            <p>Be the first to know about new destinations, experiences & more!</p>
         </div>

         <div className='input-section'>
            <input type="text" placeholder='FirstName'/>
            <input type="text" placeholder='SecondName'/>
            <input type="email" placeholder='Email Address'/>
            <button type='submit'>Join now</button>
         </div>

         <div className='tiny-note'>
            <p>We respect your privacy. No ifs and or about that</p>
         </div>
      </NewsLetterElement>
    </NewsLetterContainer>
  )
}

export default NewsLetter
