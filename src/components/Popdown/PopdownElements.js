import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const PopdownContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isPopdownOpen }) => (isPopdownOpen ? "100%" : "0")};
  top: ${({ isPopdownOpen }) => (isPopdownOpen ? "0" : "-100%")};
`;

export const ClosedIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const PopdownWrapper = styled.div`
  color: #fff;
`;

export const PopdownContent = styled.div`

`;

