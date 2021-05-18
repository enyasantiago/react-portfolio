import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { famapmarker } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <>
        <div class="card mb-3">
            <div class="card-body" id="contact">
                <h1 class="card-title" id="name">Enya Santiago</h1>
                <ul class="list-unstyled mb-0">
                    <li>
                        <i class="fas fa-map-marker-alt fa-1x"></i>
                        <p>New Jersey, USA</p>
                    </li>
  
                    <li>
                    {/* <i class="fas fa-phone mt-4 fa-1x"></i> */}
                    <p>973.985.9529</p>
                    </li>
  
                    <li>
                    {/* <i class="fas fa-envelope mt-4 fa-1x"></i> */}
                    <p>enya@enyasantiago.com</p>
                    </li>
                </ul> 
            </div>
        </div>
    </>
  );
}

export default Contact;
