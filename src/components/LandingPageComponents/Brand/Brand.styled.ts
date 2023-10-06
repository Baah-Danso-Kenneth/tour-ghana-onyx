import { styled } from "styled-components";

export const BrandContainer=styled.div`
  background-color:${({theme})=>theme.colors.primaryColor};
`;

export const BrandElemet=styled.div`
  max-width:70%;
  margin:0 auto;
  gap:2rem;
  display:flex;
  >img{
    object-fit:contain;
    width:20%;
  }

`;