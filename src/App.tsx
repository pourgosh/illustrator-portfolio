import { Router } from "./routes";
import { StyledHomePage } from "./pages/HomePage/HomePage.styles";

function App() {
  return (
    <>
      <Router path="/" element={<StyledHomePage />} />
    </>
  );
}

export default App;
