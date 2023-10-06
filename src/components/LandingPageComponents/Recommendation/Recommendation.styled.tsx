import { styled } from "styled-components";

export const RecommendationContainer=styled.div`
  background-color:${({theme})=>theme.colors.subPrimaryColor};
  height:230px;
  margin-top:-2rem;
`;


export const RecommendationElement=styled.div`
   max-width:80%;
   margin:0 auto;
   transform:translateY(4rem);
   display:flex;
   align-items:center;
   justify-content:space-between;
`;
