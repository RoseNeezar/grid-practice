import React, { FC } from "react";
import styled from "styled-components";
import Icons from "./../../../images/sprite.svg";

const ListLayout = styled.div``;
const ListHeadings = styled.h4``;
const ListText = styled.p``;

interface IProps {
  t1: string;
  text: string;
  svgClass: string;
}

const ServiceList: FC<IProps> = ({ t1, text, svgClass }) => {
  return (
    <ListLayout>
      <svg>
        <use xlinkHref={`${Icons}${svgClass}`}></use>
      </svg>
      <ListHeadings>{t1}</ListHeadings>
      <ListText>{text}</ListText>
    </ListLayout>
  );
};

export default ServiceList;
