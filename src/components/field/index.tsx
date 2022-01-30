import { Theme } from "@/types/theme";
import React from "react";
import styled from "styled-components";

interface IFieldProps {
  children: React.ReactNode;
  label: string;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 8px 15px;
  flex-direction: column;

  border: 1px solid
    ${({ theme }: { theme: Theme }) => theme.palette.common.gray};

  &:hover {
    border: 1px solid
      ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
    z-index: 1;
  }

  label {
    color: ${({ theme }: { theme: Theme }) => theme.palette.secondary.main};
    font-weight: 400;
    line-height: 122%;
  }
`;

export default function Field({ label, children, ...props }: IFieldProps) {
  return (
    <Container>
      <label>{label}</label>
      {children}
    </Container>
  );
}
