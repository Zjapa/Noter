import styled, { css } from "styled-components";
type IconLabelSize = "sm" | "md" | "lg";
export const LabelContainer = styled.div<{ $size: IconLabelSize }>`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $size, theme }) =>
    $size === "sm" &&
    css`
      ${theme.typography.preset5}
      svg {
        width: 100%;
        height: 100%;
        width: 16px;
        height: 16px;
      }
    `};
  ${({ $size, theme }) =>
    $size === "md" &&
    css`
      ${theme.typography.preset4}
      svg {
        width: 100%;
        height: 100%;
        width: 20px;
        height: 20px;
      }
    `};
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextWrapper = styled.div``;

type LabelProps = {
  size: IconLabelSize;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  className?: string;
};
const Label = ({ size, Icon, text, className }: LabelProps) => {
  return (
    <LabelContainer $size={size} className={className}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {text && <TextWrapper>{text}</TextWrapper>}
    </LabelContainer>
  );
};

export default Label;
