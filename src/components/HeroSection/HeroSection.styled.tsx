import styled from "styled-components";
import HeroSection from ".";
import pageLogo from "../../assets/pageLogo/pageLogo.png";

type HeroSectionProps = {
  className?: string;
};

export const StyledHeroSection = styled(HeroSection)<HeroSectionProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 20px;
  .logo {
    background-image: url(${pageLogo});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: auto;
    aspect-ratio: 2/1;
    @media (min-width: 768px) {
      aspect-ratio: 3.5/1;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;
