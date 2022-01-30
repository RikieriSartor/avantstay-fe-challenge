/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;

  .small {
    display: none;
    max-width: 28px;
    max-heigth: 28px;
  }

  .large {
    display: block;
    max-width: 160px;
    max-heigth: 16px;
  }

  @media only screen and (max-width: 768px) {
    .large {
      display: none;
    }

    .small {
      display: block;
    }
  }
`;

export default function BrandImage() {
  return (
    <Container>
      <img
        key="small"
        src="/logo.svg"
        className="small"
        alt="Picture of Avantstay logo"
      />

      <img
        key="large"
        src="/logo-text.svg"
        className="large"
        alt="Picture of Avantstay logo"
      />
    </Container>
  );
}
