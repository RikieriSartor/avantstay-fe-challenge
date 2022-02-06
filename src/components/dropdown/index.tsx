import React from "react";
import styled from "styled-components";

interface IDropdownProps extends React.HtmlHTMLAttributes<HTMLSelectElement> {
  value?: any;
}

const Select = styled.select`
  border: none;
  font-size: 13px;
  margin-top: 4px;
  margin-left: -3px;
`;

export default function Dropdown({
  value,
  children,
  ...props
}: IDropdownProps) {
  return (
    <Select value={value} {...props}>
      {children}
    </Select>
  );
}
