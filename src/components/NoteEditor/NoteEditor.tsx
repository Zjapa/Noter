
import styled from "styled-components";

const NoteEditorContainer = styled.section`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 20px 16px 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
`;

const NoteEditor = () => {
  return <NoteEditorContainer>NoteEditor</NoteEditorContainer>;
};

export default NoteEditor;
