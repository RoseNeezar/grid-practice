import styled, { css } from "styled-components";

interface IStyle {
  light?: boolean;
  dark?: boolean;
}
export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: 400;
`;
export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: 400;
  font-size: 4rem;
  font-style: italic;
  line-height: 1;
  ${(props: IStyle) =>
    props.light &&
    css`
      color: ${({ theme }) => theme.colors.greyLight1};
    `};
  ${(props: IStyle) =>
    props.dark &&
    css`
      color: ${({ theme }) => theme.colors.greyDark1};
    `};
`;
export const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const H4 = styled.h4``;
