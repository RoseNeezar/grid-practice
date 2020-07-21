import React from "react";
import styled from "styled-components";
import StoryImg1 from "./../../../images/story-1.jpeg";
import StoryImg2 from "./../../../images/story-2.jpeg";
import StoryBG from "./../../../images/back.jpg";

const PicturesLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  grid-column: full-start / col-end 4;
  background-image: linear-gradient(
      rgba(198, 153, 99, 0.5),
      rgba(198, 153, 99, 0.5)
    ),
    url(${StoryBG});
  background-size: cover;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-column: 1/-1;
    padding: 6rem;
  }
`;
const Img1 = styled.img`
  width: 100%;
  grid-row: 2/6;
  grid-column: 2/6;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-column: 1/5;
    grid-row: 1/-1;
  }
`;
const Img2 = styled.img`
  width: 115%;
  grid-row: 4/6;
  grid-column: 4/7;
  z-index: 20;
  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
  @media ${({ theme }) => theme.breakpoints.medium} {
    width: 100%;
    grid-row: 1/-1;
  }
`;

const StoryPictures = () => {
  return (
    <PicturesLayout>
      <Img1 src={StoryImg1} alt="image story 1" />
      <Img2 src={StoryImg2} alt="image story 2" />
    </PicturesLayout>
  );
};

export default StoryPictures;
