/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styled from "styled-components";
import { H3, H2 } from "../../common/typography";
import { styledSystemC } from "../../utils/StyledSystem";

const ContentLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.greyLight1};
  grid-column: col-start 5 / full-end;
  padding: 6rem 8vw;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; */
  display: grid;
  align-content: center;
  justify-items: start;
  @media ${({ theme }) => theme.breakpoints.medium} {
    grid-column: 1/-1;
    grid-row: 7/8;
  }
`;
const P = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4rem;
`;
const ContentButton = styled.button`
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
`;
const _H3 = styledSystemC(H3);
const _H2 = styledSystemC(H2);

const StoryContent = () => {
  return (
    <ContentLayout>
      <_H3 mb={1}>Happy Customers</_H3>
      <_H2 dark mb={2}>
        &ldquo;The best decision of our lives&rdquo;
      </_H2>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        cumque accusamus corrupti eum ex ipsa suscipit, explicabo ab dolores
        quos beatae fugit error nisi cum a quasi voluptatibus pariatur deleniti?
      </P>
      <ContentButton>Find your own home</ContentButton>
    </ContentLayout>
  );
};

export default StoryContent;
