import React from "react";
import '../styles/about-section.scss'

export default function AboutSection(){
      return (
            <section className="about--wrapper">
                  <div className="about--info">
                        <h4 className="about-title">Presentation</h4>
                        <h1 className="about-name">Kouassi Kan Yves Henri Joel</h1>
                        <div className="about--description">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="about--btn">
                              <a href="/" className="know-more">En savoir plus</a>
                        </div>
                  </div>
                  <div className="about--illustration">
                        <span className="animated-letter">H</span>
                        <span className="animated-letter">J</span>
                  </div>
            </section>
      )
}