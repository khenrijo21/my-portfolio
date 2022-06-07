import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiFlutter } from 'react-icons/si';

import '../styles/components/skill.scss'

export default function Skill({icon, title, desc, percentage}){
      const style = {width: percentage + '%'}

      console.log(icon)

      return (
            <div className="skill--wrapper">
                  <div className="skill--header">
                        {title === "Flutter" ? <SiFlutter /> :  <FontAwesomeIcon icon={icon} />}
                        <h2>{title}</h2>
                        <p>{desc}</p>
                  </div>
                  <div className="skill--body">
                        <div className="skill-percentage" style={style}></div>
                  </div>
            </div>
      )
}
