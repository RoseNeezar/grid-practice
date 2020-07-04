import React from "react";
import styled from "styled-components";

const FooterLayout = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  grid-column: full-start/full-end;
`;

const Footer = () => {
  return <FooterLayout>Footer</FooterLayout>;
};

export default Footer;
