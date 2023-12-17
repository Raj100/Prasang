import React from "react";
// import '../App.css'
import Navbar from "../Components/Navbar";
import ElectricButton from "../Components/ElectricButton";
import { Link } from "react-router-dom";
import EventsInfoPage from "../Components/EventsInfoPage"; // Updated component name

const CodeSprintPage = () => {
  return (
    <div>
      <EventsInfoPage
        eventName="Code Sprint"
        eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wikimania_hackathon_2.JPG/2560px-Wikimania_hackathon_2.JPG"
        eventFile=""
        eventPrize=""
        eventRules=""
      />
    </div>
  );
};

export default CodeSprintPage;
