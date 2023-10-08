import React from 'react'
import { KindWordContent, KindwordCardContainer, Triangle } from './Cards.styled'

interface Props{
  statement:string,
  name:string
}

function KindWordCard({statement, name}:Props) {
  
  return (
    <KindWordContent>
    <KindwordCardContainer>
       <p>{statement}</p>  
             <Triangle/>
    </KindwordCardContainer>
        <p className='recommend_name'>-{name}</p>
    </KindWordContent>
  )
}

export default KindWordCard
