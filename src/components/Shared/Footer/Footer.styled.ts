import styled from "styled-components";

export const FooterContainer=styled.div`

`;

export const FooterElement=styled.div`
 max-width:70%;
 margin:0 auto;

 .sponsors{
    display:flex;
    justify-content:center;

    >img{
        width:20%;
        object-fit:contain;
    }
 }

 .first_section{
    margin-top:3rem;
    display:flex;
    justify-content:center;

    >p{
        font-weight:200;
        color:#fff;
        font-size:14px;
        font-family:${({theme})=>theme.fonts.PoppinsFont};
        width:85%;
        text-align:center;
    }
 }

 .second_section{
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    >h5{
        margin-bottom:0;
        font-size:16px;
        text-transform:uppercase;  
        color:${({theme})=>theme.colors.primaryColor}  
    }
    >p:nth-child(2){
        border-bottom:1px solid #ccc;
        transform:translateY(-0.5rem);
        color:#fff;
        font-weight:100;
        font-size:14px;
    }

    >p:nth-child(3){
        transform:translateY(-1rem);
        font-size:14px;
        color:#fff;
        font-weight:100;
        font-family:${({theme})=>theme.fonts.HindFont};
    }
 }


 .last_section{
        >p{
        display:flex;
        justify-content:center;
        font-size:14px;
        font-family:${({theme})=>theme.fonts.PoppinsFont};
        color:#fff;
        }
    }
`;

