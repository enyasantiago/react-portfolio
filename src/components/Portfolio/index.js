import React from "react";
import PortfolioImages from "../../images/Style Me.gif";

function Portfolio() {
    return (
    <>
        <div class="card">
            <img src ={PortfolioImages} alt= "Enya" className= "img-fluid"/>
            <div class="card-body">
                    <h5 class="card-title">Style Me</h5>
                    <p class="card-text">Style Me is an application that allows the user to upload photos of your clothing from your camera,
                        computer or social media.
                        Organize your clothes into outfits and categorize them by occasion, season, mood or whatever you like!
                        Create your own personal lookbook and maximize your closet.
                    </p>
                    <div class="btn-group" role="group" aria-label="projects">
                        <a class="btn btn-secondary btn-lg" href="https://stylemenow.herokuapp.com/" role="button"><i class="fas fa-external-link-alt"></i></a>
                        <a class="btn btn-secondary btn-lg" href="https://github.com/mpasricha1/style_me" role="button"><i class="fab fa-github-square"></i></a>
                    </div>
                </div>
        </div>    
    </>
  );
}

export default Portfolio;