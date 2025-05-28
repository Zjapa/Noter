export interface NoteFormStateTypes {
  title: string;
  content: string;
  tags: string[];
}

export type NoteFormActionType =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_CONTENT"; payload: string }
  | { type: "ADD_TAG"; payload: string }
  | { type: "REMOVE_TAG"; payload: string }
  | { type: "RESET_FORM" };
