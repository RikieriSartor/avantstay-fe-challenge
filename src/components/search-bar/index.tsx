import { Theme } from "@/types/theme";
import React from "react";
import styled from "styled-components";
import Field from "@/components/field";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > * + * {
    margin-left: 10px;
  }
`;

interface IContentProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  width: string | number;
}

const Content = styled.div<IContentProps>`
  width: ${({ width }) => width};
  display: flex;
  margin-bottom: 24px;

  > * + * {
    margin-left: -1px;
  }

  > *:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  > *:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export default function SearchBar() {
  return (
    <Container>
      <Content width="80%">
        <Field label="Where">
          <input />
        </Field>
        <Field label="When">
          <input />
        </Field>
        <Field label="Who">
          <input />
        </Field>
        <Field label="Order">
          <input />
        </Field>
      </Content>

      <Content width="20%">
        <Field label="Coupon">Coupon</Field>
      </Content>
    </Container>
  );
}
