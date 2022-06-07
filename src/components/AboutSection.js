import React from "react";
import '../styles/components/about-section.scss'
import { FaGithub, FaLinkedin, FaPhoneAlt, FaArrowDown } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export default function AboutSection(){
      return (
            <section id="about" className="about--wrapper">
                  <div className="about--info">
                        <h4 className="about-title">Presentation</h4>
                        <h1 className="about-name">Kouassi Kan Yves Henri Joel</h1>
                        <div className="about--description">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="about--socials">
                              <a href="https://github.com/khenrijo21" className="social" target="_blank" rel="noreferrer"><FaGithub /> Github</a>
                              <a href="/" className="social"><FaLinkedin /> Linkedin</a>
                              <a href="mailto:khenrijo21@gmail.com" className="social"><AiOutlineMail /> khenrijo21@gmail.com</a>
                              <a href="tel:+2250747826390" className="social"><FaPhoneAlt /> +225 07 47 82 63 90</a>
                        </div>
                  </div>
                  <div className="about--illustration">
                        <span className="animated-letter">H</span>
                        <span className="animated-letter">J</span>
                  </div>
                  <div className="know-more">
                        <a href="#skills">
                              En savoir plus <br />
                              <FaArrowDown />
                        </a>
                  </div>
            </section>
      )
}