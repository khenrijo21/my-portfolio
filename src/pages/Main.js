import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";

export default function Main() {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".wrapper");
    const menus = document.querySelectorAll(".sidebar-link");

    const changeMenuActive = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          if(entry.target.classList.contains('about__wrapper')){
            menus[0].classList.add('active')
          }
          else if(entry.target.classList.contains('skills__wrapper')){
            menus[1].classList.add('active')
          }
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
    })
    
  }, []);
  return (
    <main>
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
