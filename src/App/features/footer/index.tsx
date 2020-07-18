import React from "react";
import styled from "styled-components";

const FooterLayout = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  grid-column: full-start/full-end;
  padding: 8rem;
`;
const FooterNav = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
`;
const FooterNavItem = styled.li``;
const FooterNavLink = styled.a`
  &:link,
  &:visited {
    font-size: 1.4rem;
    color: #fff;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontDisplay};
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    display: block;
    transition: all 0.2s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
  }
`;
const FooterCopy = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.greyLight2};
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 70%;
`;

const Footer = () => {
  return (
    <FooterLayout>
      <FooterNav>
        <FooterNavItem>
          <FooterNavLink href="#">Find your dream home</FooterNavLink>
        </FooterNavItem>
        <FooterNavItem>
          <FooterNavLink href="#">Request Proposal</FooterNavLink>
        </FooterNavItem>
        <FooterNavItem>
          <FooterNavLink href="#"> Home Planner</FooterNavLink>
        </FooterNavItem>
        <FooterNavItem>
          <FooterNavLink href="#">Sell your house</FooterNavLink>
        </FooterNavItem>
        <FooterNavItem>
          <FooterNavLink href="#">Contact Us </FooterNavLink>
        </FooterNavItem>
        <FooterNavItem>
          <FooterNavLink href="#">Work Here</FooterNavLink>
        </FooterNavItem>
      </FooterNav>
      <FooterCopy>&copy; Copyright by Rose Neezar</FooterCopy>
    </FooterLayout>
  );
};

export default Footer;
