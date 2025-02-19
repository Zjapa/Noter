import { TagContainer, Text } from "./TagItem.styled";
import TagIcon from "../../assets/images/icon-tag.svg";

type TagItemProps = {
  tagName: string;
};

const TagItem = ({ tagName }: TagItemProps) => {
  return (
    <TagContainer>
      <TagIcon />
      <Text>{tagName}</Text>
    </TagContainer>
  );
};

export default TagItem;
