import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



function Contact() {
  return (
    <>
        <div class="card mb-3">
            <div class="card-body" id="contact">
                <h1 class="card-title" id="name">Enya Santiago</h1>
                <ul class="list-unstyled mb-0">
                    <li>
                    <FontAwesomeIcon icon={faMapMarker} />
                        <p>New Jersey, USA</p>
                    </li>
  
                    <li>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>973.985.9529</p>
                    </li>
  
                    <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>enya@enyasantiago.com</p>
                    </li>
                </ul> 
            </div>
        </div>
    </>
  );
}

export default Contact;
