import { StyledHeroSection } from "../../components/HeroSection/HeroSection.styled";

type Props = {
  className?: string;
};

const HomePage = ({ className }: Props) => {
  return (
    <main className={className}>
      <StyledHeroSection />
    </main>
  );
};

export default HomePage;
