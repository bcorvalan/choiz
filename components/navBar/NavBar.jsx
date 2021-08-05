import React, { useState } from "react";
import ChoizLogo from "../svgs/logos/ChoizLogo";
import NavBarLink from "./NavBarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const navBarLinks = [
    {
      title: "Tratamientos",
      url: "/",
    },
    {
      title: "Consulta online",
      url: "/",
    },
    {
      title: "Quiénes somos",
      url: "/",
    },
    {
      title: "Preguntas frecuentes",
      url: "/",
    },
    {
      title: "Contacto",
      url: "/",
    },
  ];
  const [showNabMobile, setShowNabMobile] = useState(false);

  function toggleModal() {
    setShowNab((prevShowModal) => !prevShowModal);
  }

  return (
    <div className="nav-bar">
      <ChoizLogo />
      <ul className="nav-bar__list">
        {navBarLinks.map((element, index) => {
          return <NavBarLink link={element} key={index} />;
        })}
      </ul>
      <div className="any-doubts">
        <button className="any-doubts__button"></button>
        <div className="any-doubts__text">
          <p>¿Tenés dudas?</p>
        </div>
      </div>
      <button className="nav-bar__mobile-icon">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}
