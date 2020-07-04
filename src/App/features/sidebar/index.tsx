import React from "react";
import styled from "styled-components";

const SidebarLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1/ -1;
`;

const Sidebar = () => {
  return <SidebarLayout>Sidebar</SidebarLayout>;
};

export default Sidebar;
