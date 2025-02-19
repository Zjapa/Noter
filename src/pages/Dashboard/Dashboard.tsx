import Sidebar from "../../components/Sidebar/Sidebar";
import {
  Controls,
  Desc,
  Main,
  MainHeader,
  MainTitle,
  NotesLayout,
  NotesList,
} from "./Dashboard.styled";

const Notes = () => {
  return (
    <NotesLayout>
      <Sidebar />
      <Main>
        <MainHeader>
          <MainTitle>All Notes</MainTitle>
          <nav>
            <input type="text" />
            settings
          </nav>
        </MainHeader>
      </Main>

      <NotesList>Notes</NotesList>
      <Desc>Description</Desc>
      <Controls>Controls</Controls>
    </NotesLayout>
  );
};

export default Notes;
