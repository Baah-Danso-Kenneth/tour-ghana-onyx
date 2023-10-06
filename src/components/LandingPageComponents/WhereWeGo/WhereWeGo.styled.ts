import styled from "styled-components";

export const WhereWeGoContainer=styled.div`
>h3{
  text-align:center;
  font-family:${({theme})=>theme.fonts.PoppinsFont};
  font-size:2.5rem;
  font-weight:200;
  color:${({theme})=>theme.colors.primaryColor};
  transform:translateY(35%);
  text-transform:uppercase;
}
background-color:${({theme})=>theme.colors.baseColor};
margin-top:-2.5rem;
`;


export const WhereWeGoElements=styled.div`
  max-width:90%;
  margin:0 auto;
  justify-content:center;
  display:flex;
  gap:2rem;
  flex-flow:wrap;
  margin-bottom:2rem;

`;
