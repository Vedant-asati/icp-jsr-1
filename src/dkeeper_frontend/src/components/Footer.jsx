import React from "react";
import "../main.css";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faNoteSticky
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer1">
      <p className="icon-class">
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/vedant-asati-ab278a252'><FontAwesomeIcon icon={faLinkedin} className="fa-icon" color="#4d4d4e" /></a>
        <a target='_blank' rel='noreferrer' href='https://github.com/vedant-asati'><FontAwesomeIcon icon={faGithub} className="fa-icon" color="#4d4d4e" /></a>
        <a target='_blank' rel='noreferrer' href='https://twitter.com/vedant_asati_'><FontAwesomeIcon icon={faTwitter} className="fa-icon" color="#4d4d4e" /></a>
      </p>
      <p>
        Copyright ⓒ {year}<br />
        with ❤️ JSR...
      </p>
    </footer>
  );
}

export default Footer;