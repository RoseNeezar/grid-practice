import React from "react";
import styled from "styled-components";

const PicturesLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  grid-column: full-start / col-end 4;
`;

const StoryPictures = () => {
  return <PicturesLayout>Story pictures</PicturesLayout>;
};

export default StoryPictures;
