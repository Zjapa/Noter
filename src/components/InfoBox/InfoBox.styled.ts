import styled from "styled-components";

export const InfoBoxStyled = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;
