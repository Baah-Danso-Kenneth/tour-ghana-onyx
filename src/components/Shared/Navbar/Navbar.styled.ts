import { styled } from "styled-components";
import { device } from "../../../utils/BreakPoints";

export const NavbarContainer=styled.div`
display:flex;
max-width:80%;
margin:0 auto;
padding:0.5rem;
font-family:${({theme})=>theme.fonts.PoppinsFont};
font-size:13px;
text-transform:uppercase;
color:#fff;
font-weight:300;

.icon_layout{
  display:none;
}

@media ${device.xl}{

}
@media ${device.lg}{

  .icon_layout{
    display:none;
  }
}
@media ${device.md}{
  .icon_layout{
    display:block;
    transform:translate(-5rem, 30%);
    .menu_icon{
      font-size:20px;
    }
  }

}
@media ${device.sm}{
 
}


`;

export const NavbarLeftSection=styled.div`
transform:translate(10%);
display:flex;
align-items:flex-end;
>ul{
  display:flex;
  gap:1rem;

  >li{
    list-style:none;
  }
}

.logo_div{
  transform:translate(10%);
  display:flex;
  align-items:flex-end;
  >p{
    white-space:nowrap;
  }

  >img{
    width:50%;
    height:80px;
    object-fit:contain;
    transform:translateX(10%);
  }
}

@media ${device.xl}{}

@media ${device.lg}{
  >ul{
    transform:translate(5rem,-3rem);
  }

  .logo_div{
    flex-flow:column-reverse;
    transform:translate(6rem,-3rem);

    >img{
      transform:translate(-20%,35%)
    }
  }
}
@media ${device.md}{
display:flex;
justify-content:space-between;
align-items:flex-end;

  >ul{
    display:none;
  }
    .logo_div{
      >p{
        display:none;
      }
      >img{
        width:100%;
        height:80px;
        transform:translate(3rem, 2.5rem);
      }
    }
}
@media ${device.sm}{}

`;





export const NavbarRighttSection=styled.div`
transform:translate(20%);
display:flex;
align-items:flex-end;
>ul{
  display:flex;
  gap:1rem;

  >li{
    list-style:none;
  }
}

@media ${device.xl}{}
@media ${device.lg}{
  transform:translate(50%,-38%);
}
@media ${device.md}{
  display:none;
}
@media ${device.sm}{}
`;
