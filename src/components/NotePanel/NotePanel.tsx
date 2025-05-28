import styled from "styled-components";
import Button from "../Button/Button";
import InfoBox from "../InfoBox/InfoBox";
import useNotesStore from "../../store/notesStore";
import NotesList from "./NotesList/NotesList";

const NotePanelContainer = styled.section`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 20px 16px 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

const NotePanel = () => {
  const notes = useNotesStore((state) => state.notes);

  const openNoteEditor = () => {
    console.log("Open Note Editor");
  };
  return (
    <NotePanelContainer>
      <Button onClick={openNoteEditor}>+ Create New Note</Button>
      {!notes.length ? (
        <InfoBox label="You don’t have any notes yet. Start a new note to capture your thoughts and ideas." />
      ) : (
        <NotesList />
      )}
    </NotePanelContainer>
  );
};

export default NotePanel;
