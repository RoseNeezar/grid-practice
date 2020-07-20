import React from "react";
import styled from "styled-components";
import { GalleryData } from "../data";
import GalleryList from "./GalleryList";

const GalleryLayout = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight1};
  grid-column: full-start/full-end;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw);
  grid-gap: 1.5rem;
  padding: 1.5rem;
`;

const Gallery = () => {
  return (
    <GalleryLayout>
      {GalleryData.map((res) => {
        return <GalleryList key={res.id} image={res.image} />;
      })}
    </GalleryLayout>
  );
};

export default Gallery;
