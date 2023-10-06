import styled from "styled-components";

export const BusinessOfTourismContainer=styled.div`
   background-color:${({theme})=>theme.colors.baseColor};
`;

export const BusinessOfTourismElement=styled.div`
   max-width:80%;
   margin:0 auto;





   >div{
    display:flex;
    align-items:center;
    justify-content:center;
    >img{
        width:100%;
        object-fit:contain;
        margin-top:3rem;
    }
   }

   >h3{
      text-align:center;
      margin-top:2rem;
      color:${({theme})=>theme.colors.primaryColor};
      font-weight:300;
      font-family:${({theme})=>theme.fonts.HindFont};
      font-size:30px;
      width:60%;
      line-height:30px;
      text-transform:uppercase;
      transform:translate(30%);
      margin-bottom:0;

   }

   >p{
      width:60%;
      text-align:center;
      transform:translate(35%);
      color:#fff;
      font-weight:200;
      font-family:${({theme})=>theme.fonts.PoppinsFont}
   }

   >button{
      transform:translate(26rem);
      margin-bottom:2rem;
      padding:13px 30px 13px;
      border:none;
      outline:none;
      border-radius:5px;
      text-transform:uppercase;
      color:#fff;
      background-color:${({theme})=>theme.colors.primaryColor};
   }
`;