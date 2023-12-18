import React from "react";
import { Link } from "react-router-dom";
import ElectricButton from "./ElectricButton";
import "./EventBox.css"

const EventBox = ({ eventName, eventImgSrc, eventRole, eventLink }) => {
  return (
    <div>
      <div className="event-holder" data-aos="zoom-in-up">
        <h1>{eventName}</h1>
        <div className="events-box">
          <div className="event-content">
            <div className="event-front">
              <img
                className="event-img"
                src={eventImgSrc}
                alt={`${eventName}`}
              />
            </div>
            <div className="event-back">
              <p></p>
              <p> {eventRole}</p>
              <div className="Register">
                <Link to={`/${eventLink}`}>
                  <ElectricButton ButtonName="More info"></ElectricButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EventBox;
