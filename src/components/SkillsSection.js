import React from "react";
import {
  faBootstrap,
  faLaravel,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { GiSkills } from "react-icons/gi";

import Skill from "./Skill";

import "../styles/components/skills-section.scss";
import { faDatabase, faListCheck } from "@fortawesome/free-solid-svg-icons";

export default function SkillsSection() {
  const skills = [
    {
      icon: faLaravel,
      title: "Laravel",
      desc: "Laravel is an open-source web framework written in PHP respecting the model-view-controller principle and entirely developed in object-oriented programming.",
      percentage: "95",
    },
    {
      icon: faSass,
      title: "Sass",
      desc: "Sass is a preprocessor scripting language that is compiled or interpreted in CSS.",
      percentage: "100",
    },
    {
      icon: faBootstrap,
      title: "Bootstrap",
      desc: "Bootstrap is a collection of tools useful for creating web design and web applications. It is a set that contains HTML, CSS and JS code.",
      percentage: "100",
    },
    {
      icon: faReact,
      title: "React.js",
      desc: "React is a free JavaScript library developed by Facebook since 2013 that facilitates the creation of SPAs through the creation of components.",
      percentage: "85",
    },
    {
      icon: "",
      title: "Flutter",
      desc: "Flutter is an open-source user interface software development kit created by Google used to develop applications for Android, iOS from a single code base.",
      percentage: "60",
    },
    {
      icon: faDatabase,
      title: "SQL (MySQL, PostgreSQL)",
      desc: "SQL is a standardised computer language used to operate relational databases.",
      percentage: "90",
    },
    {
      icon: faListCheck,
      title: "MERISE",
      desc: "Merise is a method of analysis, design and management of IT projects. This method is still suitable for the management of internal projects in organisations, limited to a specific domain.",
      percentage: "100",
    },
  ];

  return (
    <section id="skills" className="wrapper skills__wrapper">
      <h1 className="skills-title">
        Skills <GiSkills />{" "}
      </h1>

      <p className="skills-desc">
        Each bar represents approximately the percentage of knowledge I have in
        building an application with the quoted language / tool based on a
        purely subjective estimation.
      </p>

      <div className="skills__body">
        {skills.map((skill, index) => {
          return (
            <Skill
              key={index}
              icon={skill.icon}
              title={skill.title}
              desc={skill.desc}
              percentage={skill.percentage}
            />
          );
        })}
      </div>
    </section>
  );
}
