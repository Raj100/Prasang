import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Workshops = () => {
  return (
    <div id="Workshops">
      <div className="Workshop-top spacer"></div>
      <h1 className="center">Workshops</h1>
      <div className="events">
        <div className="events-box" data-aos="fade-right">
          <div className="event-content">
            <div className="event-front">
              <img
                className="event-img"
                src="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
                alt=""
              />
              <h2> Workshop-1</h2>
            </div>
            <div className="event-back">
              <h1>Workshop-1</h1>
              <p>Date:</p>
              <p>Time:</p>
              <p>Venue:</p>
              <Link to="/Code sprint">
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="events-box" data-aos="fade-up">
          <h2> Workshop-2</h2>
          <div className="event-content">
            <div className="event-front">
              <img
                className="event-img"
                src="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
                alt=""
              />
              <h2> Workshop-2</h2>
            </div>
            <div className="event-back">
              <h1>Workshop-2</h1>
              <p>Date:</p>
              <p>Time:</p>
              <p>Venue:</p>
              <Link to="/Code sprint">
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="events-box" data-aos="fade-left">
          <h2> Workshop-3</h2>
          <div className="event-content">
            <div className="event-front">
              <img
                className="event-img"
                src="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
                alt=""
              />
              <h2> Workshop-3</h2>
            </div>
            <div className="event-back">
              <h1>Workshop-3</h1>
              <p>Date:</p>
              <p>Time:</p>
              <p>Venue:</p>
              <Link to="/Code sprint">
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Add more workshop boxes as needed */}
      </div>

      <div class="spacer layer2"> </div>
    </div>
  );
};

export default Workshops;
