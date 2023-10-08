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

export const TravelContainer=styled(AdventureContainer)`
background-color:${({theme})=>theme.colors.subPrimaryColor};
height:55vh;

`;


export const TravelElement=styled(AdventureElement)`
 display:flex;
 gap:5rem;

  .group_text{
    flex:0.4;
    transform:translateY(5%);

    >h1{
      font-size:35px;
      font-weight:300;
      font-family:${({theme})=>theme.fonts.PoppinsFont};
      line-height:45px;
    }

    >p{
      font-weight:300;
      color:#fff;
    }

    >button{
      text-transform:uppercase;
      padding:12px 30px 12px;
      outline:none;
      border:none;
      background-color:${({theme})=>theme.colors.primaryColor};
      border-radius:5px;
      color:#fff;

    }
  }

  .images{
   transform:translate(30%, -50%);
   flex:0.6;
   >img{
      width:70%;

   }
  }

`;

export const SingleTravelContainer=styled(AdventureContainer)`
`;

export const SingleTravelElement=styled(AdventureElement)`
  display:flex;
 .image-trop{
   flex:0.6;
   >img{
      width:80%;
      object-fit:contain;
      transform:translate(0,0%);
   }
 }

 .text-trop{
   flex:0.4;
   transform:translate(0,20%);

   >h1{
      font-weight:300;
      font-family:${({theme})=>theme.fonts.PoppinsFont};
      color:${({theme})=>theme.colors.primaryColor};
   }

   >p{
      font-weight:300;
      color:#fff;
      font-family:${({theme})=>theme.fonts.HindFont};
   }

   >button{
      padding:13px 35px 13px;
      outline:none;
      border:none;
      border-radius:5px;
      background-color:${({theme})=>theme.colors.primaryColor}
   }
 }
`;