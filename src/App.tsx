import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
