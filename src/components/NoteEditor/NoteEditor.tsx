import useNotesStore, { getAllTagsSelector } from "../../store/notesStore";
import { nanoid } from "nanoid";
import Button from "../Button/Button";
import { useReducer } from "react";
import { NoteFormActionType, NoteFormStateTypes } from "./NoteEditor.types";
import {
  DateText,
  NoteEditorContent,
  NoteEditorFooter,
  NoteEditorForm,
  NoteEditorHeader,
  NoteEditorSection,
  NoteEditorTitle,
  NoteEditorLabel,
  Properties,
  TagsInput,
  EditDateWrapper,
  NoteTagWrapper,
} from "./NoteEditor.styled";
import IconClock from "../../assets/images/icon-clock.svg";
import IconTag from "../../assets/images/icon-tag.svg";

/* NOTE REDUCER */
const noteFormInitialState = {
  title: "",
  content: "",
  tags: [],
};

const noteFormReducer = (
  state: NoteFormStateTypes,
  action: NoteFormActionType
) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_CONTENT":
      return { ...state, content: action.payload };
    case "ADD_TAG":
      return { ...state, tags: action.payload.split(",") };
    case "RESET_FORM":
      return noteFormInitialState;
    default:
      return state;
  }
};
const NoteEditor = () => {
  const [noteFormState, dispatch] = useReducer(
    noteFormReducer,
    noteFormInitialState
  );
  const addNote = useNotesStore((state) => state.addNote);
  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote({
      id: nanoid(),
      title: noteFormState.title,
      content: noteFormState.content,
      tags: noteFormState.tags,
      lastEditDate: new Date(),
    });
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <NoteEditorSection>
      <NoteEditorForm onSubmit={handleAddNote}>
        <NoteEditorHeader>
          <NoteEditorTitle
            type="text"
            name="note-title"
            placeholder="Enter a title..."
            value={noteFormState.title}
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
          <Properties>
            <NoteTagWrapper>
              <NoteEditorLabel text="Tags" Icon={IconTag} size="sm" />
              <TagsInput
                type="text"
                name="note-tags"
                value={noteFormState.tags}
                placeholder="Add tags separated by commas (e.g. work, personal)"
                onChange={(e) =>
                  dispatch({
                    type: "ADD_TAG",
                    payload: e.target.value,
                  })
                }
              />
            </NoteTagWrapper>
            <EditDateWrapper>
              <NoteEditorLabel text="Last edited" Icon={IconClock} size="sm" />
              <DateText>Not saved yet</DateText>
            </EditDateWrapper>
          </Properties>
        </NoteEditorHeader>

        <NoteEditorContent
          name="note-content"
          id="note-content"
          placeholder="Start typing your note here..."
          value={noteFormState.content}
          onChange={(e) =>
            dispatch({
              type: "SET_CONTENT",
              payload: e.target.value,
            })
          }
        ></NoteEditorContent>

        <NoteEditorFooter>
          <Button variant="Primary" type="submit">
            Save Note
          </Button>
          <Button
            variant="Primary"
            type="button"
            onClick={() => dispatch({ type: "RESET_FORM" })}
          >
            Cancel
          </Button>
        </NoteEditorFooter>
      </NoteEditorForm>
    </NoteEditorSection>
  );
};

export default NoteEditor;
