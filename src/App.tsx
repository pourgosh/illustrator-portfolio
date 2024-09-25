import { Router } from "./routes";
import { StyledHomePage } from "./pages/HomePage/HomePage.styles";
import { StyledHeroSection } from "./components/HeroSection/HeroSection.styled";
import { StyledNavbar } from "./components/Navbar/Navbar.styles";

function App() {
  return (
    <>
      <StyledHeroSection />
      <StyledNavbar />
      <Router path="/" element={<StyledHomePage />} />
    </>
  );
}

export default App;
