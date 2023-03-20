import React from "react";
import ProfilePhoto from "../images/Hotel_De_Ville.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={ProfilePhoto} alt="Cyril Kevin" />
      <h1 className="info--fullname">Cyril Kevin</h1>
      <h5 className="info--role">Web Developer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://github.com/cack195"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:cackamr195@gmail.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/cyril-kevin-7200161b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
