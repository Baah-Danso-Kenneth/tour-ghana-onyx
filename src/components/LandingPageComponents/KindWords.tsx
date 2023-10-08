import React from 'react'
import { KindwordContainer, KindwordElement } from '../Cards/Cards.styled'
import KindWordCard from '../Cards/KindWordCards'

function KindWords() {
  const testimonials = [
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'I didn’t know any of the women in the group, but it only took a few minutes to feel that I was among friends. Everyone was fun and interesting, and Wild Terrains created an atmosphere that made us all feel like we belonged. I would recommend this trip to anyone, of any age or background who is looking for a new experience.',name:'Shingle T.'},
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'I didn’t know any of the women in the group, but it only took a few minutes to feel that I was among friends. Everyone was fun and interesting, and Wild Terrains created an atmosphere that made us all feel like we belonged. I would recommend this trip to anyone, of any age or background who is looking for a new experience.',name:'Suzzy'}





  ]
  return (
    <KindwordContainer>
      <h1>Kind words</h1>
      <KindwordElement>
        {testimonials.map(({statement, name},index)=>(
          <KindWordCard key={index} statement={statement} name={name}/>
        ))}
      </KindwordElement>
      <div className='kind-word-btn'>
      <button>more about us</button>
      </div>
    </KindwordContainer>
  )
}

export default KindWords
