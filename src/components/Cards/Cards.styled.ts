import { styled } from "styled-components";
import { RecommendationElement } from "../LandingPageComponents/Recommendation/Recommendation.styled";

export const DestinationCardContainer=styled.div`
width:240px;
height:300.6px;
position:relative;
cursor:pointer;

    &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 230.7px;
    height: 290.6px;
    background-color: rgba(0, 0, 0, 0.5); 
    pointer-events: none; 
    transition: background-color 0.5s ease; 
  }

  &:hover::after{
   background-color:rgba(0,0,0,0.3);
  }



.img_ptag{
    position:relative;
    img{
        width:230.7px;
        height:290.6px;
        object-fit:cover;
    }

    >p{
    position:absolute;
    top:10%;
    left:50%;
    transform:translate(-50%);
    z-index:50;
    font-size:25px;
    word-wrap:break-word;
    color: #fff;
    text-align:center;
    text-transform:uppercase;
    font-family:${({theme})=>theme.fonts.HindFont};
    line-height:35px;
    }
}

.itenary{
    position:absolute;
    top:80%;
    color:#fff;
    left:30%;

    display:flex;
    align-items:center;
    z-index:50;

    >h3{
        font-weight:200;
        font-size:13px;
    }

    >p{
        margin-left:0.8rem;
        font-weight:200;
    }

}


`;

export const RecommendContent=styled.div`

  .recommend_name{
    color:${({theme})=>theme.colors.primaryColor};
    font-style:italic;
    font-size:13px;
    font-family:${({theme})=>theme.fonts.HindFont};
    transform:translate(12.5rem, -0.2rem);

  }
`;

export const RecommendationCardContainer=styled.div`
 position:relative;
  width:300px;
  padding:1rem;
  background-color:${({theme})=>theme.colors.primaryColor};

  >p{
    color:#fff;
    font-family:${({theme})=>theme.fonts.PoppinsFont};
    font-weight:300;
    font-size:13px;
  }
`;


export const Triangle=styled.div`
  position: absolute;
  left: 80%;
  transform: translateY(5px) rotate(80deg); /* Center the triangle horizontally */
  width: 0;
  height: 0;
  border-left: 15px solid transparent; /* Adjust the size of the triangle */
  border-right: 15px solid transparent; /* Adjust the size of the triangle */
  border-top: 15px solid #6b7e18;/*atch the background color of the rectangle */

`;


export const KindwordContainer=styled.div`
  height:125vh;
  margin-top:-2rem;
  background-color:${({theme})=>theme.colors.subPrimaryColor};
  >h1{
    text-align:center;
    transform:translate(0,0.8rem);
    margin-bottom:1rem;
    font-weight:200;
    text-transform:uppercase;
  }
  
  .kind-word-btn{
    >button{
  padding:10px 30px 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  transform:translate(34rem,0%);
  margin-bottom:2rem;
  outline:none;
  border:none;
  text-transform:uppercase;
  background-color:${({theme})=>theme.colors.primaryColor};
  border-radius:5px;
  font-weight:200;
  font-family:${({theme})=>theme.fonts.HindFont};
  color:#fff;
}
  }


`;

export const KindwordElement= styled.div`
   max-width:80%;
   margin:0 auto;
   display:flex;
   flex-wrap:wrap;
   gap: 2rem; 
   justify-content:center;
   align-items:center;
   transform:translate(0%,5%);

`; 

export const KindwordCardContainer = styled(RecommendationCardContainer)``;
export const KindwordElementCard = styled.div``;

export const KindWordContent = styled(RecommendContent)`
`;