import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Buttons(props) {
    return (
    <>
<div class="btn-group" role="group" aria-label="projects">
<a class="btn btn-secondary btn-lg awesomeBtn" href={props.appLink} role="button"> <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
<a class="btn btn-secondary btn-lg awesomeBtn" href={props.repoLink} role="button"> <FontAwesomeIcon icon={faGithub} /></a>   
</div>
         
    </>
  );
}

export default Buttons;