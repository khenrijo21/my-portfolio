import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faListCheck,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/components/navbar.scss";

export default function Navbar() {
  return (
    <nav className="sidebar">
      <a href="#about" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faUser} />
      </a>
      <a href="#skills" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faDiagramProject} />
      </a>
      <a href="#achievements" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faListCheck} />
      </a>
    </nav>
  );
}
