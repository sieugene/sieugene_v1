import styled from "@emotion/styled";
import { Button } from "@mui/material";

const BaseButton = styled(Button)`
  width: fit-content;
  width: 100%;
  color: black;
  background: #ffffffc7;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 1rem;
  font-size: 16px;
  cursor: pointer;
  justify-content: flex-start;
  text-transform: inherit;
  &:hover {
    opacity: 0.7;
    background: #ffffffc7;
  }
`;

export default BaseButton;
