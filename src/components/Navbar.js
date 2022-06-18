import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faListCheck,
  faDiagramProject,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/components/navbar.scss";

export default function Navbar() {
  return (
    <navbar className="sidebar">
      <a id="home" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faHome} />
      </a>
      <a id="skills" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faDiagramProject} />
      </a>
      <a id="realisations" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faListCheck} />
      </a>
      <a id="contact" href="/" className="sidebar-link">
        <FontAwesomeIcon size="xl" icon={faPaperPlane} />
      </a>
    </navbar>
  );
}
