import React from "react";


function Card(props) {
    return (
    <>
       
            <img src ={props.PortfolioImages} alt= {props.imgAlt} className= "img-fluid"/>
            <div class="card-body">
                    <h5 class="card-title">{props.cardTitle}</h5>
                    <p class="card-text">{props.cardText}
                    </p>
                    
                </div>
          
    </>
  );
}

export default Card;

