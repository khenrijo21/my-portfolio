import React from "react";
import "../styles/components/about-section.scss";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaArrowDown } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function AboutSection() {
  return (
    <section id="about" className="wrapper about__wrapper">
      <div className="about__left">
        <div className="about__info">
          <h4 className="about-title">Presentation</h4>
          <h1 className="about-name">Kouassi Kan Yves Henri Joel</h1>
          <div className="about__desc">
            <p>
              Web Full-stack and mobile developer from <span>Côte</span> d'
              <span>Ivoire</span>, co-founder of{" "}
              <a
                href="https://inputstudio.co/"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Input Studio
              </a>
              , modern day vampire (because I work mostly from midnight to
              dawn), passionate about computers, new technologies, astronomy,
              sports and co-founder of Input Studio. I am always looking for new
              challenges in order to improve my skills and become the best
              version of myself. <br />
              Are you looking for something? Maybe I can help you? <br />
              Contact me.
            </p>
          </div>
          <div className="about__socials">
            <a
              href="https://github.com/khenrijo21"
              className="social"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> khenrijo21
            </a>
            <a href="/" className="social" target="_blank" rel="noreferrer">
              <FaLinkedin /> Linkedin
            </a>
            <a href="mailto:khenrijo21@gmail.com" className="social">
              <AiOutlineMail /> khenrijo21@gmail.com
            </a>
            <a href="tel:+2250747826390" className="social">
              <FaPhoneAlt /> +225 07 47 82 63 90
            </a>
          </div>
        </div>
        <div className="about__illustration">
          <span className="animated-letter">H</span>
          <span className="animated-letter">J</span>
        </div>
      </div>

      <div className="know-more">
        <a href="#skills">
          En savoir plus <br />
          <FaArrowDown />
        </a>
      </div>
    </section>
  );
}
