import React from "react";
import { SidebarContainer, Icon, ClosedIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About Me</SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
          <SidebarLink to="work" onClick={toggle}>My Work</SidebarLink>
          <SidebarLink to="resume" onClick={toggle}>Resume</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact Me</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
