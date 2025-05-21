import styled from "styled-components";
import { NoteType } from "../../../types/commonTypes";
import { format } from "date-fns";

const NoteItemContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 8px;
`;
const Tags = styled.div`
  display: flex;
  gap: 4px;
`;

const Tag = styled.h6`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  padding: 2px 6px;
  border-radius: 4px;
`;
interface NoteItemProps {
  note: NoteType;
}

const NoteItem = ({ note }: NoteItemProps) => {
  const { tags, title, lastEditDate } = note ?? {};
  return (
    <NoteItemContainer>
      <h3>{title}</h3>
      <Tags>
        {tags.map((name) => (
          <Tag key={name}>{name}</Tag>
        ))}
      </Tags>
      <h6>{format(new Date(lastEditDate), "dd MMM yyyy")}</h6>
    </NoteItemContainer>
  );
};

export default NoteItem;
