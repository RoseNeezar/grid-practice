import React from "react";
import styled from "styled-components";
import ServiceList from "./ServiceList";
import { featureData } from "../data";

const ServicesLayout = styled.section`
  grid-column: center-start / center-end;
  margin: 15rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-row: 4/7;
  }
`;

const Services = () => {
  return (
    <ServicesLayout>
      {featureData.map((res) => (
        <ServiceList
          key={res.id}
          t1={res.header}
          text={res.text}
          svgClass={res.svgClass}
        />
      ))}
    </ServicesLayout>
  );
};

export default Services;
