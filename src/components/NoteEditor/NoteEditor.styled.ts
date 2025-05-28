import styled from "styled-components";
import Label from "../Label/Label";

export const NoteEditorSection = styled.section`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;
export const NoteEditorForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NoteEditorHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const NoteEditorTitle = styled.input`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.neutral[950]};

  /* border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]}; */
  ${({ theme }) => theme.typography.preset1}
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[950]};
  }
`;

export const NoteEditorContent = styled.textarea`
  flex-grow: 1;
  resize: none;
  outline: none;
  background: none;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 16px 0px;

  &::placeholder {
    color: ${({ theme }) => theme.typography.preset5};
    color: ${({ theme }) => theme.colors.neutral[700]};
  }
`;
export const NoteEditorFooter = styled.footer`
  display: flex;
  gap: 16px;
  margin: 16px 0px;
`;
export const Properties = styled.div`
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NoteTagWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const TagsInput = styled.input`
  flex-grow: 2;
  border-radius: 6px;
  padding: 4px;
  border: 1px solid transparent;
  outline: none;
  ${({ theme }) => theme.typography.preset5}

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[400]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.neutral[700]};
  }
`;

export const EditDateWrapper = styled.div`
  display: flex;
`;
export const DateText = styled.h5`
  padding-left: 4px;
  flex-grow: 7;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

//* Label for Note Editor */
export const NoteEditorLabel = styled(Label)`
  flex-grow: 1;
`;
