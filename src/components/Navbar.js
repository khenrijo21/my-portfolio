import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faListCheck,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/components/navbar.scss";

export default function Navbar() {
  return (
    <nav className="sidebar">
      <a id="home" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faHome} />
      </a>
      <a id="skills" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faDiagramProject} />
      </a>
      <a id="realisations" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faListCheck} />
      </a>
    </nav>
  );
}
