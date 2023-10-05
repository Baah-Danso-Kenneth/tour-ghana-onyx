import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const HeroContainer=styled.div`

position:relative;

@media ${device.xl}{}
@media ${device.lg}{
    .hero_img{
      /* margin:0;
      padding:0;
      vertical-align:middle; */
    }

    .hero_statement{
        position:absolute;
        top:0;
        left:0;
        transform:translate(17rem,5rem);

        >p{
            color:#fff;
            font-family:${({theme})=>theme.fonts.PoppinsFont};
            font-size:2.5rem;
            width:75%;
            text-align:center;
            line-height:45px;
            text-transform:uppercase;
            font-weight:200;
           
        }
    }
}
@media ${device.md}{}
@media ${device.sm}{}

`;