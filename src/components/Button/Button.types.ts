import { ReactNode } from "react";

export type ButtonVariantType =
  | "Primary"
  | "Disabled"
  | "Success"
  | "Danger"
  | "Warning";
export type ButtonProps = {
  variant?: ButtonVariantType;
  children: ReactNode;
  onClick?: () => void;
};
