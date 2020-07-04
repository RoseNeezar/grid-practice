import React from "react";
import styled from "styled-components";

const GalleryLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.greyDark2};
  grid-column: full-start/full-end;
`;

const Gallery = () => {
  return <GalleryLayout>Gallery</GalleryLayout>;
};

export default Gallery;
