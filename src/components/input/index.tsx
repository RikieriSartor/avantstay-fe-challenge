import React from "react";
import styled from "styled-components";

interface IDropdownProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SInput = styled.input`
  border: none;
  padding: 8px 0px;
  font-size: 13px;
  font-weight: 300;
`;

export default function Input({ ...props }: IDropdownProps) {
  return <SInput {...props} />;
}
