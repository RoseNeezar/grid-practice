import React from "react";
import styled from "styled-components";

const HomesLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
  grid-column: center-start / center-end;
`;

const Homes = () => {
  return <HomesLayout>Home</HomesLayout>;
};

export default Homes;
