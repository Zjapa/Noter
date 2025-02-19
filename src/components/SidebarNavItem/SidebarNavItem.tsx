import {
  ChevronRightStyled,
  ItemContainer,
  Text,
} from "./SidebarNavItem.styled";

type SidebarNavItemProps = {
  IconActive: React.ElementType;
  IconInactive: React.ElementType;
  text: string;
  isActive?: boolean;
} & React.ComponentProps<"div">;

const SidebarNavItem = ({
  IconActive,
  IconInactive,
  text,
  isActive,
  ...restProps
}: SidebarNavItemProps) => {
  return (
    <ItemContainer $isActive={isActive} {...restProps}>
      {isActive ? <IconActive /> : <IconInactive />}
      <Text>{text}</Text>
      {isActive ? <ChevronRightStyled /> : null}
    </ItemContainer>
  );
};

export default SidebarNavItem;
