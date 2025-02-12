import styled from "styled-components";

const Sidebar = styled.section`
  border-right: 1px solid black;
  grid-column: 1/2;
  grid-row: 1/3;

  @media (max-width: 768px) {
    display: none; /* Hide Sidebar on tablet and mobile */
  }
`;

const NotesList = styled.section`
  border-right: 1px solid black;
  grid-column: 2/3;
`;

const Desc = styled.section`
  border-right: 1px solid black;
  grid-column: 3/4;
`;

const Controls = styled.section`
  grid-column: 4/5;
`;

const Header = styled.section`
  grid-column: 2/5;
`;

const NotesLayout = styled.section`
  display: grid;
  grid-template-columns:
    minmax(50px, 272px) minmax(50px, 290px) minmax(50px, 588px)
    minmax(50px, 290px);
  grid-template-rows: auto;
`;

const Notes = () => {
  return (
    <NotesLayout>
      <Sidebar>SideBar</Sidebar>
      <Header>All Notes - search</Header>
      <NotesList>Notes</NotesList>
      <Desc>Description</Desc>
      <Controls>Controls</Controls>
    </NotesLayout>
  );
};

export default Notes;
