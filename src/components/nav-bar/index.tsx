import React from "react";
import styled from "styled-components";
import NavLink from "./nav-link";

const Navigation = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  > * + * {
    margin-left: 30px;
  }
`;

const navigation = [
  { href: "/homes", label: "Find Homes" },
  { href: "/partners", label: "Partners" },
  { href: "/company-retreats", label: "Company Retreats" },
  { href: "/more", label: "More" },
];

export default function NavBar() {
  return (
    <Navigation>
      {navigation.map(({ href, label }) => (
        <NavLink label={label} href={href} key={href} />
      ))}
    </Navigation>
  );
}
