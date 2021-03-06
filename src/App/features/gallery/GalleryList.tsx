import React, { FC } from "react";
import styled from "styled-components";

const ImgFigure = styled.figure`
  &:nth-child(1) {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  }
  &:nth-child(2) {
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
  }
  &:nth-child(3) {
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
  }
  &:nth-child(4) {
    grid-row: 1 / span 2;
    grid-column: 7 / -1;
  }
  &:nth-child(5) {
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
  }
  &:nth-child(6) {
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
  }
  &:nth-child(7) {
    grid-row: 4 / 5;
    grid-column: 5 / 6;
  }
  &:nth-child(8) {
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
  }

  &:nth-child(9) {
    grid-row: 3 / span 3;
    grid-column: 8 / -1;
  }

  &:nth-child(10) {
    grid-row: 6 / span 2;
    grid-column: 1 / 2;
  }

  &:nth-child(11) {
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
  }

  &:nth-child(12) {
    grid-row: 6 / span 2;
    grid-column: 4 / 5;
  }
  &:nth-child(13) {
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
  }

  &:nth-child(14) {
    grid-row: 6 / span 2;
    grid-column: 8 / -1;
  }
`;
const ImgList = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

interface IList {
  image: string;
}
const GalleryList: FC<IList> = ({ image }) => {
  return (
    <ImgFigure>
      <ImgList src={image} alt="gallery-img-1" />
    </ImgFigure>
  );
};

export default GalleryList;
