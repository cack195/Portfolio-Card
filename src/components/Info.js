import React from "react";
import ProfilePhoto from "../images/Hotel_De_Ville.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={ProfilePhoto} alt="Cyril Kevin" />
      <h1 className="info--fullname"> Hi I'm Cyril Kevin 👋</h1>
      <h5 className="info--role">Web Developer</h5>
       <br></br>
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
          href="https://www.github.com/cack195"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--github">
            <FontAwesomeIcon icon={faGithubSquare} className="info--icon" />
            GitHub 
          </button>
        </a>
      </div>
    </div>
  );
}
