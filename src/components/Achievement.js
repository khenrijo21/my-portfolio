import React from "react";
import PropTypes from 'prop-types';

import "../styles/components/achievement.scss";

export default function Achievement({img, title, link}) {
  return (
    <a className="achievement" href={link} target="_blank" rel="noopenner noreferrer">
      <img src={img} alt={title} />
      <p>{title}</p>
    </a>
  );
}

Achievement.propTypes = {
  img : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  link : PropTypes.string.isRequired,
}