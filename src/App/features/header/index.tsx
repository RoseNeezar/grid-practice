import React from "react";
import styled from "styled-components";
import Logo1 from "../../../images/logo.png";
import LogoBBC from "../../../images/logo-bbc.png";
import LogoForbes from "../../../images/logo-forbes.png";
import LogoTC from "../../../images/logo-techcrunch.png";
import LogoBI from "../../../images/logo-bi.png";
import HeroLogo from "../../../images/hero.jpeg";
import { H3, H1 } from "../../common/typography";

const HeaderLayout = styled.header`
  background-color: ${({ theme }) => theme.colors.greyDark1};
  grid-column: full-start / col-end 6;
  background-image: linear-gradient(
      rgba(16, 29, 44, 0.93),
      rgba(16, 29, 44, 0.93)
    ),
    url(${HeroLogo});
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;
  display: grid;
  grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
  grid-template-columns: minmax(min-content, max-content);
  grid-row-gap: 1.5rem;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-column: 1/-1;
  }
  @media ${({ theme }) => theme.breakpoints.small} {
    padding: 5rem;
  }
`;
const HeaderLogo = styled.img`
  height: 3rem;
  justify-self: center;
`;
const HeaderSeenOnTxt = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-column-gap: 1.5rem;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.greyLight2};
  &::before,
  &::after {
    content: "";
    height: 1px;
    display: block;
    background-color: ${({ theme }) => theme.colors.greyLight2};
  }
`;
const HeaderSeenOnLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3rem;
  justify-items: center;
  align-items: center;
  img {
    max-height: 2.5rem;
    max-width: 100%;
    filter: brightness(70%);
  }
`;
const HeaderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  align-self: start;
  justify-self: start;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderLogo src={Logo1} alt="logo-main" />
      <H3>Your own home:</H3>
      <H1> The ultimate personal Freedom</H1>
      <HeaderButton>View our properties</HeaderButton>
      <HeaderSeenOnTxt>Seen On</HeaderSeenOnTxt>
      <HeaderSeenOnLogos>
        <img src={LogoBBC} alt="logo-bbc" />
        <img src={LogoForbes} alt="logo-forbes" />
        <img src={LogoTC} alt="logo-techcrunch" />
        <img src={LogoBI} alt="logo-bi" />
      </HeaderSeenOnLogos>
    </HeaderLayout>
  );
};

export default Header;
