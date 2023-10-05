import { styled } from "styled-components";

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