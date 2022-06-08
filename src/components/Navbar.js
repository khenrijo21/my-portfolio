import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListCheck, faDiagramProject, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import '../styles/components/navbar.scss'

export default function Navbar(){

      return (
            <navbar className="sidebar">
                  <a href="/" className="sidebar-link active">
                        <FontAwesomeIcon size="xl" icon={faHome} />
                  </a>
                  <a href="/" className="sidebar-link">
                        <FontAwesomeIcon size="xl" icon={faDiagramProject} />
                  </a>
                  <a href="/" className="sidebar-link">
                        <FontAwesomeIcon size="xl" icon={faListCheck} />
                  </a>
                  <a href="/" className="sidebar-link">
                        <FontAwesomeIcon size="xl" icon={faPaperPlane} />
                  </a>
            </navbar>
      )
}