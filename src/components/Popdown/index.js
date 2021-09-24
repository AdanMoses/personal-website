import React from "react";
import {
  ClosedIcon,
  Icon,
  PopdownContainer,
  PopdownContent,
  PopdownWrapper,
} from "./PopdownElements";

const Popdown = ({ isPopdownOpen, togglePopdown }) => {
  return (
    <PopdownContainer isPopdownOpen={isPopdownOpen} onClick={togglePopdown}>
      <Icon onClick={togglePopdown}>
        <ClosedIcon />
      </Icon>
      <PopdownWrapper>
        <PopdownContent />
      </PopdownWrapper>
    </PopdownContainer>
  );
};

export default Popdown;
