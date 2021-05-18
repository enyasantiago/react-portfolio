import React from "react";
import StyleMe from "../../images/Style Me.gif";
import MixTape from "../../images/Mix Tape 2.png";
import Weather from "../../images/Weather Dashboard.png";
import Workday from "../../images/Workday Scheduler.png";
import Budget from "../../images/Budget.png";
import Burger from "../../images/Burgers.gif";
import Buttons from "../Buttons";
import Card from "../Card";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
// import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
// import { faGitHub } from "@fortawesome/free-solid-svg-icons";

function Portfolio(props) {
    return (
    <>
        {/* <div class="card">
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
        </div>     */}
        <Card
            PortfolioImages={StyleMe}
            imgAlt={"Style Me"}
            cardTitle={"Style Me"}
            cardText={"Style Me is an application that allows the user to upload photos of your clothing from your camera,computer or social media. Organize your clothes into outfits and categorize them by occasion, season, mood or whatever you like! Create your own personal lookbook and maximize your closet."}
        />
        <Card
            PortfolioImages={MixTape}
            imgAlt={"Mix Tape"}
            cardTitle={"Mix Tape Maker"}
            cardText={"A simple mix tape making app. Two APIs were used for this app, one to find a list of similar bands from a users band input and a second to gather all the information and tracks from the users. The user can then listen to their 10 song mixtape in the app."}
        />
        <Card
            PortfolioImages={Weather}
            imgAlt={"Weather Dashboard"}
            cardTitle={"Weather Dashboard"}
            cardText={"Weather Dashboard application that allows users to see weather outlook for multiple cities. User can input city which is added to search history. User can view current weather conditions for that city with city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. UV index view shows a color that indicates whether the conditions are favorable, moderate, or severe. Future weather conditions view for that city shows a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity. When a city is clicked in the search history, current and future conditions for that city are displayed. When the weather dashboard is opened,the last searched city forecast is displayed."}
        />
        <Card
            PortfolioImages={Workday}
            imgAlt={"WorkDay Scheduler"}
            cardTitle={"WorkDay Scheduler"}
            cardText={"A simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."}
        />
        <Card
            PortfolioImages={Budget}
            imgAlt={"Budget Tracker"}
            cardTitle={"Budget Tracker"}
            cardText={"This app allows the user to add expenses and deposits to their budget with or without a connection. When entering transactions offline, the transactions should populate the total when brought back online."}
        />
        <Card
            PortfolioImages={Burger}
            imgAlt={"Burger Logger"}
            cardTitle={"Burger Logger"}
            cardText={"This burger logger application allows the user to add burger names to a list. The user has the ability tp move a burger to a list of devoured burgers, update devoured burgers to be shown back on the list of burgers that are available to eat and to delete a burger from the database entirely. In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. The MVC design pattern was utilized. Node and MySQL were used to query and route data in the app, and Handlebars was used to generate your HTML."} 
        />
        <Buttons to={{ pathname: "https://enyasantiago.github.io/" }} target="_blank"> app </Buttons>
    </>
  );
}

export default Portfolio;
