import React from "react";
import styled from "styled-components";

const RealtorLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  grid-column: col-start 7 / full-end;
`;

const Realtors = () => {
  return <RealtorLayout>Top 3 realtors</RealtorLayout>;
};

export default Realtors;
