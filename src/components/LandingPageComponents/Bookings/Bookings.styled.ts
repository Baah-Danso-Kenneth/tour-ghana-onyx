import styled from "styled-components";

export const BookingContainer=styled.div`
  background-color:${({theme})=>theme.colors.primaryColor};
`;

export const BookingElement =styled.div`
   max-width:80%;
   margin:0 auto;
   .company-logo{
    display:flex;
    justify-content:center;
    align-items:center;
    >img{
        width:20%;
    }
   }

.booking_flex{
    padding:2rem;
    display:flex;
    gap:2rem;

    .first_section{
        >img{
            width:15%;
        }

        font-size:14px;
        color:#fff;
        font-family:${({theme})=>theme.fonts.PoppinsFont};
        font-weight:200;
    }

   
    .second_section{
        >img{
            width:15%;
        }

        font-size:14px;
        color:#fff;
        font-family:${({theme})=>theme.fonts.PoppinsFont};
        font-weight:200;
    }


    .third_section{
        >img{
            width:15%;
        }

        font-size:14px;
        color:#fff;
        font-family:${({theme})=>theme.fonts.PoppinsFont};
        font-weight:200;
    }

}
`;