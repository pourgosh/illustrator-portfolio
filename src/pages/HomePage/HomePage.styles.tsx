import styled from "styled-components";
import HomePage from ".";

type HomePageTypes = {
  className?: string;
};

export const StyledHomePage = styled(HomePage)<HomePageTypes>`
  background-color: #90e0ef;
  padding: 20px 30px 0 30px;
`;
