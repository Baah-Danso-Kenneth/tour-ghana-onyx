import styled from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const WhatWeDocontainer=styled.div`
  z-index:100;
  margin-top:-1rem;
  @media ${device.lg}{
  
    padding:3rem;
    background-color:${({theme})=>theme.colors.primaryColor};

  

  }
`;


export const WhatWeDoElement=styled.div`
max-width:80%;
margin:0 auto;
font-family:${({theme})=>theme.fonts.PoppinsFont};

 >h3{
        text-align:center;
        font-size:1.5rem;
        width:50%;
        font-weight:400;
        color:#fff;
        transform:translate(50%);
        text-transform:uppercase;
    }

.what_we_do{
        display:flex;
        justify-content:space-between;
        gap:1rem;

        >div{
          >h3{
            color:#fff;
            margin-bottom:0;
            font-size:2rem;
            font-family:${({theme})=>theme.fonts.HindFont};
            font-weight:300;
            text-transform:uppercase;
          }

          >p{
            transform:translateY(-30%);
            font-weight:200;
            font-size:0.9rem;
            width:100%;
            color:#fff;

            >span{
            >img{
              width: 1.5rem;
            }
          }
          }

        
        }
    }

`;