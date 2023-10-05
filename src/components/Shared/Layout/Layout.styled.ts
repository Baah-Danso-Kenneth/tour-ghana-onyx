import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const LayoutContainer=styled.div`
   display:grid;
   grid-template-columns:repeat(3,1fr);
   grid-template-rows:20% auto 605px;

   @media ${device.xl}{
    
   }
   @media ${device.lg}{}
   @media ${device.md}{}
   @media ${device.sm}{}
  `;

export const LayoutHeader=styled.div`
   background-color:blue;
   grid-area:1/1/span 1/-1;
  `;

export const LayoutMainContent=styled.div`
   background-color:purple;
   grid-area:2/1/span 1/-1;
  `;


export const LayoutFooter=styled.div`
background-color:red;
grid-area:3/1/span 1/-1
  `;
