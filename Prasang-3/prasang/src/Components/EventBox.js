import React from "react";
import { Link } from "react-router-dom";
import ElectricButton from "./ElectricButton";
import PropTypes from "prop-types";

const EventBox = ({ eventName, eventImgSrc, eventRole, eventLink }) => {
  return (
    <div>
      <div className="event-holder" data-aos="fade-up">
        <h1>{eventName}</h1>
        <div className="events-box">
          <div className="event-content">
            <div className="event-front">
              <img
                className="event-img"
                src={eventImgSrc}
                alt={`${eventName} Image`}
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

EventBox.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventImgSrc: PropTypes.string.isRequired,
  eventRole: PropTypes.string.isRequired,
  eventLink: PropTypes.string.isRequired,
};

export default EventBox;
