import styled from "styled-components";

export const DashboardLayout = styled.section`
  display: grid;
  grid-template-columns: minmax(50px, 272px) minmax(50px, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
`;

export const Desc = styled.section`
  border-right: 1px solid black;
`;

export const Controls = styled.section`
  border-right: 1px solid black;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
`;
export const NotesDetails = styled.section`
  display: grid;
  grid-template-columns:
    minmax(50px, 290px) minmax(50px, 588px)
    minmax(50px, 290px);
  height: 100%;
`;

export const Header = styled.header`
  grid-column: 2/5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.neutral[950]};
  font-weight: 900;
`;
