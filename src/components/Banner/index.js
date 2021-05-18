
import React from "react";
import Typewriter from "typewriter-effect";
import PortfolioImages from "../../images/Enya.jpg";

function Banner() {
  return (
    <>
    <main class="container-fluid">
        <div class="row">
            <div class="col-12 col-sm-6">
            <img src ={PortfolioImages} alt= "Enya" className= "img-fluid rounded-circle"/>
            
            </div>

            <div class="col-12 col-sm-6" id="about">
            <h1><Typewriter
              options={{
                strings: "Hi, I'm Enya.",
                pauseFor: 10000,
                autoStart: true,
                loop: true,
                }}
                />
                </h1>
            
            <h3>I'm a full stack developer-in-training, hospice nurse, massage therapist and lifelong learner.</h3>
            </div>  
        </div>
    </main>  
    </>
  );
}

export default Banner;