import { Route, Routes } from "react-router";
import Notes from "./pages/Dashboard/Dashboard";
import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`;

function App() {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Notes />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
