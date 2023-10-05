import React from 'react'
import { WhatWeDoElement, WhatWeDocontainer } from './WhatweDo.styled'
import HandsUp from '../../../assets/images/icons8-woman-raising-hand-48.png';
import MuscleUp from '../../../assets/images/icons8-muscle-48.png'


function WhatweDo() {
  return (
    <WhatWeDocontainer>
      <WhatWeDoElement>
        <h3>We design trips for groups of as multi-dimensional as you</h3>
        <div className='what_we_do'>
            <div>
                <h3>Lorem, ipsum.</h3>
                <p>Our trips bring together awesome women.<span>(that you <img src={HandsUp} alt="Image Description" />!)</span>
          </p>
      
            </div>

              <div>
                <h3>Lorem, ipsum.</h3>
                <p>Our trips bring together awesome women.<span>(that you <img src={MuscleUp} alt="Image Description" />!)</span></p>
            </div>

              <div>
                <h3>Lorem, ipsum.</h3>
                 <p>Our trips bring together awesome women.<span>(that you <img src={HandsUp} alt="Image Description" />!)</span></p>
            </div>


        </div>
        </WhatWeDoElement>

    </WhatWeDocontainer>
  )
}

export default WhatweDo