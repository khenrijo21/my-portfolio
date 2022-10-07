import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import RealisationSection from "../components/AchievementsSection";
import SkillsSection from "../components/SkillsSection";

export default function Main() {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".wrapper");

    const changeMenuActive = (entries) => {
      entries.forEach((entry) => {
        // If the user is in a specific section
        if (entry.isIntersecting) {
          // Get the current active menu
          const currentMenu = document.querySelectorAll(".active");

          // Remove active class from the previous menu link
          currentMenu.classList.remove("active");

          // Get the new menu link which corresponds to the active section using his id attribute
          const newMenu = document.querySelector(
            ".sidebar-link[href*=" + entry.target.id + "]"
          );

          // Add current class to it
          newMenu.classList.add("active");
        }
      });
    };

    const options = {
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(changeMenuActive, options);
    wrappers.forEach((wrapper) => {
      observer.observe(wrapper);
    });
  }, []);
  return (
    <main>
      <AboutSection />
      <SkillsSection />
      <RealisationSection />
    </main>
  );
}
