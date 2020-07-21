import React from "react";
import styled from "styled-components";
import { H3, H4 } from "../../common/typography";
import R1 from "./../../../images/realtor-1.jpeg";
import R2 from "./../../../images/realtor-2.jpeg";
import R3 from "./../../../images/realtor-3.jpeg";

const RealtorLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  grid-column: col-start 7 / full-end;
  padding: 3rem;
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  grid-row-gap: 2rem;
  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-column: 1/-1;
  }
`;
const RealtorList = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 2rem;
  grid-row-gap: 5vh;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-template-columns: repeat(3, min-content max-content);
  }
  @media ${({ theme }) => theme.breakpoints.small} {
    grid-template-columns: min-content max-content;
  }
`;
const RealtorIMG = styled.img`
  width: 7rem;
  border-radius: 50%;
  display: block;
`;
const RealtorDetails = styled.div``;
const RealtorSold = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greyLight2};
  margin-top: -3px;
`;

const Realtors = () => {
  return (
    <RealtorLayout>
      <H3>Top 3 Realtors</H3>
      <RealtorList>
        <RealtorIMG src={R1} />
        <RealtorDetails>
          <H4 light>Eric Feinman</H4>
          <RealtorSold>245 house sold</RealtorSold>
        </RealtorDetails>
        <RealtorIMG src={R2} />
        <RealtorDetails>
          <H4 light>White woman</H4>
          <RealtorSold>2435 house sold</RealtorSold>
        </RealtorDetails>
        <RealtorIMG src={R3} />
        <RealtorDetails>
          <H4 light>Black</H4>
          <RealtorSold>25 house sold</RealtorSold>
        </RealtorDetails>
      </RealtorList>
    </RealtorLayout>
  );
};

export default Realtors;
