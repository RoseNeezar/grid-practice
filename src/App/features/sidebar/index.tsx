import React from "react";
import styled from "styled-components";

const SidebarLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1/ -1;
  display: flex;
  justify-content: center;
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
`;

const Sidebar = () => {
  return (
    <SidebarLayout>
      <SidebarButton />
    </SidebarLayout>
  );
};

export default Sidebar;
