import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
`;

export const Text = styled.h4`
  color: ${({ theme }) => theme.colors.neutral[950]};
  margin-left: ${({ theme }) => theme.spacing[100]};
`;
