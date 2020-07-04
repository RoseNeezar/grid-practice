import React from "react";
import styled from "styled-components";

const ContentLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight2};
  grid-column: col-start 5 / full-end;
`;

const StoryContent = () => {
  return <ContentLayout>Story Content</ContentLayout>;
};

export default StoryContent;
