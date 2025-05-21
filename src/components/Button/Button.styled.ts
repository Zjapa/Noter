import styled from "styled-components";
import { ButtonVariantType } from "./Button.types";

type ButtonStyledProps = {
  $variant: ButtonVariantType;
};
export const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: 12px 0px;
  border-radius: 8px;
  background-color: ${({ theme, $variant }) => {
    switch ($variant) {
      case "Primary":
        return theme.colors.blue[500];
      case "Disabled":
        return theme.colors.neutral[200];
      case "Success":
        return theme.colors.green[500];
      case "Danger":
        return theme.colors.red[500];
      case "Warning":
        return theme.colors.yellow[500];
      default:
        return theme.colors.blue[500];
    }
  }};

  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.neutral[0]};
`;
