import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const LayoutContainer=styled.div`
   display:grid;
   grid-template-columns:repeat(3,1fr);
   grid-template-rows:repeat(3,auto);

@media ${device.xl}{
   display:grid;
   grid-template-columns:repeat(3,1fr);
   grid-template-rows:85px auto auto;
   }

@media ${device.lg}{}
@media ${device.md}{}
@media ${device.sm}{}
  `;

export const LayoutHeader=styled.div`
   background-color:${({theme})=>theme.colors.primaryColor};
   grid-area:1/1/span 1/-1;

@media ${device.xl}{}
@media ${device.lg}{}
@media ${device.md}{}
@media ${device.sm}{}
  `;

export const LayoutMainContent=styled.div`

   grid-area:2/1/span 1/-1;
  `;


export const LayoutFooter=styled.div`
background-color:red;
grid-area:3/1/span 1/-1
  `;
