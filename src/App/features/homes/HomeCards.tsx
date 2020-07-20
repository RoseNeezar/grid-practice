/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from "react";
import styled from "styled-components";
import Icons from "./../../../images/sprite.svg";

interface IHomeCard {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  contact: string;
  image: string;
}
const HomeCard = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight1};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3.5rem;
`;
const HomeImage = styled.img`
  width: 100%;
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 1;
`;
const HomeLike = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  height: 2.5rem;
  width: 2.5rem;
  grid-row: 1/2;
  grid-column: 2/3;
  z-index: 2;
  justify-self: end;
  margin: 1rem;
`;
const HomeSVG = styled.svg``;
const HomeName = styled.h5`
  grid-column: 1/-1;
  grid-row: 1/2;
  align-self: end;
  justify-self: center;
  z-index: 3;
  width: 80%;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 1.6rem;
  text-align: center;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-weight: 400;
  transform: translateY(50%);
`;
const HomeLocation = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.primary};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
const HomeRoom = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.primary};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
const HomeArea = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.primary};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
const HomePrice = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.primary};
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  font-size: 1.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
const HomeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  grid-column: 1/-1;
`;

const HomeCards: FC<IHomeCard> = ({
  title,
  p1,
  p2,
  p3,
  p4,
  contact,
  image,
}) => {
  return (
    <HomeCard>
      <HomeImage src={image} alt="house-image" />
      <HomeLike>
        <use xlinkHref={`${Icons}#icon-heart-full`}></use>
      </HomeLike>
      <HomeName>{title}</HomeName>
      <HomeLocation>
        <HomeSVG>
          <use xlinkHref={`${Icons}#icon-map-pin`}></use>
        </HomeSVG>
        <p>{p1}</p>
      </HomeLocation>
      <HomeRoom>
        <HomeSVG>
          <use xlinkHref={`${Icons}#icon-profile-male`}></use>
        </HomeSVG>
        <p>{p2}</p>
      </HomeRoom>
      <HomeArea>
        <HomeSVG>
          <use xlinkHref={`${Icons}#icon-expand`}></use>
        </HomeSVG>
        <p>
          {p3}
          <sup>2</sup>
        </p>
      </HomeArea>
      <HomePrice>
        <HomeSVG>
          <use xlinkHref={`${Icons}#icon-key`}></use>
        </HomeSVG>
        <p>{p4}</p>
      </HomePrice>
      <HomeButton>{contact}</HomeButton>
    </HomeCard>
  );
};

export default HomeCards;
