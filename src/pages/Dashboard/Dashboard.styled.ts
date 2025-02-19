import styled from "styled-components";

export const NotesLayout = styled.section`
  display: grid;
  grid-template-columns:
    minmax(50px, 272px) minmax(50px, 290px) minmax(50px, 588px)
    minmax(50px, 290px);
  grid-template-rows: auto;
`;

export const NotesList = styled.section`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  grid-column: 2/3;
`;

export const Desc = styled.section`
  border-right: 1px solid black;
  grid-column: 3/4;
`;

export const Controls = styled.section`
  grid-column: 4/5;
`;

export const Main = styled.section`
  grid-column: 2/5;
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
  padding: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[100]};
`;

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.neutral[950]};
  font-weight: 900;
`;
