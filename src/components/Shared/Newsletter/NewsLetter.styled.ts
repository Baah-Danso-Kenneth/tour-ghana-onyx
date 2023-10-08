import { styled } from "styled-components";

export const NewsLetterContainer=styled.div`
`;

export const NewsLetterElement=styled.div`
  max-width:80%;
  margin:auto;


  .newsletter-notes{
    text-align:center;
    font-size:18px;
    color:#fff;
    font-family:${({theme})=>theme.fonts.PoppinsFont};

    >h3{
        font-weight:300;
        margin-bottom:0;
        text-transform:uppercase;
    }

    >p{
        font-size:10px;
        font-family:${({theme})=>theme.fonts.HindFont};
    }
  }

.input-section{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;

    >input{
        padding:10px 30px;
        border:none;
        outline:none;

    }

    >button{
        padding:10px 30px;
        outline:none;
        border:none;
        border-radius:5px;
        text-transform:uppercase;
        background-color:#fff;
        color:${({theme})=>theme.colors.primaryColor};
        font-weight:bolder;
    }
}

  .tiny-note{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:10px;
    color:#fff;
    font-style:italic;
    margin-bottom:1rem;
  }
`;