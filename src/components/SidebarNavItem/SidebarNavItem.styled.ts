import styled, { css } from "styled-components";
import ChevronRight from "../../assets/images/icon-chevron-right.svg";
type ItemContainerProps = {
  $isActive?: boolean;
};

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      img {
        fill: ${({ theme }) => theme.colors.blue[500]};
      }
    `}
`;
export const ChevronRightStyled = styled(ChevronRight)`
  margin-left: auto;
`;
export const Text = styled.h4`
  color: ${({ theme }) => theme.colors.neutral[950]};
  margin-left: ${({ theme }) => theme.spacing[100]};
`;
