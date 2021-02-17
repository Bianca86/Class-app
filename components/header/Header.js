import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import {
  Header as HeaderElement,
  Container,
  MenuToggle,
  Logo,
  Nav,
} from "./Header.style";

const Header = () => {
  const notifications = [
    {
      avatar: "https://placehold.it/30x30",
      fullName: "Nume Prenume",
      content: "O notificare",
      read: false,
    },
    {
      avatar: "https://placehold.it/30x30",
      fullName: "Nume Prenume",
      content: "A doua notificare",
      read: false,
    },
    {
      avatar: "https://placehold.it/30x30",
      fullName: "Nume Prenume",
      content: "A treia notificare",
      read: false,
    },
  ];

  return (
    <HeaderElement>
      <Container>
        <Logo>
          <Link to="/">
            <img src="https://source.unsplash.com/40x40" alt="" />
          </Link>
        </Logo>
        <MenuToggle>
          <FontAwesomeIcon icon={faBars} />
        </MenuToggle>
        <Nav>
          <Dropdown icon={faGlobeEurope} elements={notifications} />
        </Nav>
      </Container>
    </HeaderElement>
  );
};

export default Header;
