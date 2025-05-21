import { ButtonStyled } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = ({
  variant = "Primary",
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <ButtonStyled $variant={variant} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
