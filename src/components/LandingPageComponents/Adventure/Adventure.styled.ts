import { styled } from "styled-components";

export const AdventureContainer=styled.div`
background-color:${({theme})=>theme.colors.baseColor};
  
`;


export const AdventureElement=styled.div`
   max-width:80%;
   margin:0 auto;

   .art_section{
    display:flex;
    gap:1rem;
    
   }

   .images{
      flex:0.6;
     >img{
      width:80%;
      object-fit:contain;
     }
   }

   .art_text{
      flex:0.4;
      transform:translate(0%, 10%);
      >h1{
         font-weight:300;
         width:80%;
         text-align:center;
         color:${({theme})=>theme.colors.primaryColor};
      }

      >p{
         font-weight:100;
         text-align:justify;
         color:#fff;
      }

      >button{
         padding:13px 40px 13px;
         color:#fff;
         background-color:${({theme})=>theme.colors.primaryColor};
         transform:translate(50%);
         border:none;
         outline:none;
         text-transform:uppercase;
         border-radius:5px;
      }
   }
`;