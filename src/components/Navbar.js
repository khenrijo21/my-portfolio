import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListCheck, faDiagramProject, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import '../styles/navbar.scss'

export default function Navbar(){
      return (
            <navbar className="sidebar">
                  <a href="/" className="active">
                        <FontAwesomeIcon size="xl" icon={faHome} />
                  </a>
                  <a href="/">
                        <FontAwesomeIcon size="xl" icon={faDiagramProject} />
                  </a>
                  <a href="/">
                        <FontAwesomeIcon size="xl" icon={faListCheck} />
                  </a>
                  <a href="/">
                        <FontAwesomeIcon size="xl" icon={faPaperPlane} />
                  </a>
            </navbar>
      )
}