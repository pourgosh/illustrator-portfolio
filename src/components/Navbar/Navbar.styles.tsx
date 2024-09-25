import styled from "styled-components";
import Navbar from ".";

type NavbarTypes = {
  className?: string;
};

export const StyledNavbar = styled(Navbar)<NavbarTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background: #f5f2b8;
    padding-block: 4px;
    padding-inline: 55px;
    border: 2px solid #3a1772;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  div p {
    text-align: center;
    color: #3a1772;
  }
`;
