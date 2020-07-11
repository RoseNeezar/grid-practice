import React, { FC } from "react";
import styled from "styled-components";
import Icons from "./../../../images/sprite.svg";

const ListLayout = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
`;
const ListHeadings = styled.h4`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: 400;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.greyDark1};
`;
const ListText = styled.p`
  font-size: 1.7rem;
`;
const ListIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
  width: 4.5rem;
  height: 4.5rem;
  grid-row: 1 / span 2;
  transform: translateY(-1rem);
`;

interface IProps {
  t1: string;
  text: string;
  svgClass: string;
}

const ServiceList: FC<IProps> = ({ t1, text, svgClass }) => {
  return (
    <ListLayout>
      <ListIcon>
        <use xlinkHref={`${Icons}${svgClass}`}></use>
      </ListIcon>
      <ListHeadings>{t1}</ListHeadings>
      <ListText>{text}</ListText>
    </ListLayout>
  );
};

export default ServiceList;
