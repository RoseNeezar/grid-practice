import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
   ${({ theme }) => css`
     *,
     *::after,
     *::before {
       margin: 0;
       padding: 0;
       box-sizing: inherit;
     }
     html {
       box-sizing: inherit;
       font-size: 62.5%;
     }
     body {
       font-family: ${theme.fontPrimary};
       color: ${theme.colors.greyDark2};
       font-weight: 300;
       line-height: 1.6;
     }
   `}
`;
