import { NotesListContainer } from "./NotesList.styled";
import useStore from "../../../store/notesStore";
import NoteItem from "../NoteItem/NoteItem";

const NotesList = () => {
  const notes = useStore((state) => state.notes);
  return (
    <NotesListContainer>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </NotesListContainer>
  );
};

export default NotesList;
