import React from "react";
import { GiAchievement } from "react-icons/gi";

import "../styles/components/achievements-section.scss";
import Achievement from "./Achievement";

export default function AchievementsSection() {
  const achievements = [
    {
      img: "/img/inputstudio-logo.svg",
      title: "Input Studio",
      link: "https://inputstudio.co/",
    },
  ];
  return (
    <section id="achievements" className="wrapper achievements__wrapper">
      <h1 className="achievements__title">
        Achievements <GiAchievement />{" "}
      </h1>
      <div className="achievements__grid">
        {achievements.map((achievement, index) => {
          return (
            <Achievement
              key={index}
              img={achievement.img}
              title={achievement.title}
              link={achievement.link}
            />
          );
        })}
      </div>
    </section>
  );
}
