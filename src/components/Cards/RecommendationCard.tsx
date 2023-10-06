import React from 'react'
import { RecommendContent, RecommendationCardContainer, Triangle } from './Cards.styled';

interface RecommendProps{
  name:string;
  statement:string
}

function RecommendationCard({name,statement}:RecommendProps) {
  return (
    <RecommendContent>
    <RecommendationCardContainer>
       <p>{statement}</p>  
             <Triangle/>
    </RecommendationCardContainer>
        <p className='recommend_name'>-{name}</p>
    </RecommendContent>
  )
}

export default RecommendationCard