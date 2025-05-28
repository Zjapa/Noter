import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NoteType } from "../types/commonTypes";
import { devtools } from "zustand/middleware";

export interface NotesStoreType {
  notes: NoteType[];
  archivedNotes: NoteType[];
  addArchivedNote: (note: NoteType) => void;
  addNote: (note: NoteType) => void;
  getAllTags: () => string[];
  // removeNote: (id: number) => void;
}

const useNotesStore = create<NotesStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        notes: [],
        archivedNotes: [],
        addArchivedNote: (note) =>
          set((state) => ({ archivedNotes: [...state.archivedNotes, note] })),
        addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
        getAllTags: () => [
          ...new Set(get().notes.flatMap((note) => note.tags)),
        ],
      }),
      { name: "notes-storage" }
    )
  )
);

export default useNotesStore;
