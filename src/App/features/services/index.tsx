import React from "react";
import styled from "styled-components";

const ServicesLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight1};
  grid-column: center-start / center-end;
`;

const Services = () => {
  return <ServicesLayout>Features</ServicesLayout>;
};

export default Services;
