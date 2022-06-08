import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiFlutter } from 'react-icons/si';

import '../styles/components/skill.scss'

export default function Skill({icon, title, desc, percentage}){
      const style = {width: percentage + '%'}

      return (
            <div className="skill">
                  <div className="skill--header">
                        <div>
                              {title === "Flutter" ? <SiFlutter /> :  <FontAwesomeIcon icon={icon} />}
                              <h2>{title}</h2>
                        </div>
                        
                        <p>{desc}</p>
                  </div>
                  <div className="skill--body">
                        <div className="skill-percentage" style={style}></div>
                  </div>
            </div>
      )
}
