import React from 'react'
import { RecommendationContainer, RecommendationElement } from './Recommendation.styled'
import RecommendationCard from '../../Cards/RecommendationCard'

function Recommendation() {
 const recommendations=[
        {name:"Sharyn V.", statement:"Going on a trip with Wild Terrains is like having an in-the-know girlfriend arrange your itinerary."},
        {name:"Rebecca H.", statement:"Cannot recommend Wild Terrains—and the Vogue-worthy curation of their trips—enough!"},
        {name:"Amy G.", statement:"They are truly the most perfectly curated trips - and that is coming from a very selective traveler."},
    ]
    
    
  return (
    <RecommendationContainer>
        <RecommendationElement>
        {recommendations.map(({name, statement},index)=>(
            <RecommendationCard key={index} name={name} statement={statement}/>
        ))}
        </RecommendationElement>
        </RecommendationContainer>
  )
}

export default Recommendation