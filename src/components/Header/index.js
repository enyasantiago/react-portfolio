import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import Resume from "../../images/Enya Santiago Resume.pdf";

function Header() {
  return (
    <>
    <header class="header">
    <div class="row">
      <div class="col-4">
        {/* <a class="awesome" href="https://github.com/enyasantiago">
        <FontAwesomeIcon icon={faGithub} />
      </a> */}
      </div>
      <div class="col-4">
        <h1 class="name">Enya Santiago</h1>
    </div>
    <div class="col-4">
        {/* <a class="awesome" href="https://www.linkedin.com/in/enya-santiago-1716b714/">
        <FontAwesomeIcon icon={faLinkedin } />
        </a> */}
      </div>
    </div>
</header>
    </>
  );
} 

export default Header;