import React from "react";
import styled from "styled-components";

const HeaderLayout = styled.header`
  background-color: ${({ theme }) => theme.colors.greyDark1};
  grid-column: full-start / col-end 6;
`;

const Header = () => {
  return <HeaderLayout>Header</HeaderLayout>;
};

export default Header;
