import React from 'react';
import { Link } from 'react-router-dom';
import ElectricButton from './ElectricButton'; // Make sure to import ElectricButton if it's a separate component
import PropTypes from 'prop-types'; // Import PropTypes for prop type checking

const EventBox = ({ eventName, eventImgSrc, eventRole,eventLink }) => {
  return (
    <div>
        <div className='event-holder' data-aos="fade-up">
        <h1>{eventName}</h1>
      <div className="events-box" >
        <div className="event-content">
          <div className="event-front">
            <img className="event-img" src={eventImgSrc} alt={`${eventName} Image`} />
          </div>
          <div className="event-back">
            <h1>{eventName}</h1>
            <p>{eventRole}</p>
            <Link to={`/${eventLink}`}>
              <ElectricButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// Prop types for type checking
EventBox.propTypes = {
  eventName: PropTypes.string.isRequired,
  eventImgSrc: PropTypes.string.isRequired,
  eventRole: PropTypes.string.isRequired,
  eventLink: PropTypes.string.isRequired,
};

export default EventBox;
