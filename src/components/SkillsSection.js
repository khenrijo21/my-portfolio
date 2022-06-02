import React from "react";
import { faBootstrap, faLaravel } from "@fortawesome/free-brands-svg-icons";
import Skill from "./Skill";

import '../styles/components/skills-section.scss'

export default function SkillsSection(){
      const skills = [
            {
                  icon: faLaravel,
                  title: "Laravel",
                  desc: "Framework PHP permettant de creer des webapps, REST API etc...",
                  percentage: "95",
            },
            {
                  icon: faBootstrap,
                  title: "Bootstrap",
                  desc: "Bibliothèque css",
                  percentage: "100",
            },
      ]

      return (
            <section className="skills--wrapper">
                  <h1 className="skills-title">Skills</h1>
                  <div className="skills--body">
                        {skills.map(skill => {
                              return (
                                    <Skill icon={skill.icon}
                                          title={skill.title}
                                          desc={skill.desc}
                                          percentage={skill.percentage} />
                              )
                        })}
                  </div>
            </section>
      )
}