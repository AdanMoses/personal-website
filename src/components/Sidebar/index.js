import React from "react";
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About Me</SidebarLink>
          <SidebarLink to="skills">Skills</SidebarLink>
          <SidebarLink to="work">My Work</SidebarLink>
          <SidebarLink to="resume">Resume</SidebarLink>
          <SidebarLink to="contact">Contact Me</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
