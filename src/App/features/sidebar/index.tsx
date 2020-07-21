import React from "react";
import styled from "styled-components";

const SidebarLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1/ -1;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.large} {
    grid-column: 1/-1;
    grid-row: 1/ 2;
    justify-content: flex-end;
    align-items: center;
  }
`;
const SidebarButton = styled.button`
  border-radius: 0;
  border: none;
  background-color: #fff;
  height: 2px;
  width: 4.5rem;
  margin-top: 4rem;

  &::before,
  &::after {
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    content: "";
    display: block;
  }
  &::before {
    transform: translateY(-1.5rem);
  }
  &::after {
    transform: translateY(1.3rem);
  }
  @media ${({ theme }) => theme.breakpoints.large} {
    margin-top: 0;
    margin-right: 3rem;
    &::before {
      transform: translateY(-1.3rem);
    }
    &::after {
      transform: translateY(1rem);
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarLayout>
      <SidebarButton />
    </SidebarLayout>
  );
};

export default Sidebar;
