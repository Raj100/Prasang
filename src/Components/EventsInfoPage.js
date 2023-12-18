import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ElectricButton from "./ElectricButton";
import "./EventsInfoPage.css"
const eventsInfoPage = ({
  eventName,
  eventImgSrc,
  eventLink,
  eventRules,
  eventPrize,
  eventFile,
}) => {
  const rulesArray = eventRules.split('\n');
  return (
    <div>
      <div className="Events-main">
        <Navbar></Navbar>
        <div className="Events-info">

          <div className="Events-info-main">
            <div className="Events-info-main-left">
              <img className="Events-info-img" src={eventImgSrc} alt="" />
              <p>{eventPrize}</p>
              {/* <ElectricButton ButtonName="Download-Brocure"></ElectricButton> */}
              <a href={eventFile} download><button className="Download-btn">Brochure<i class="fa fa-download" aria-hidden="true"></i></button></a>
            </div>

            <div className="Events-info-main-right">
            <h1>{eventName}</h1>
              <div>
                <h3>Rules & Regulations:-</h3>
              <ul>
                  {rulesArray.map((rule, index) => (
                    <li key={index} className="rules">{rule}</li>
                  ))}
                </ul>
              </div>

              <div className="Register">
              <Link to={eventLink}>
                <ElectricButton ButtonName="Register"></ElectricButton>
              </Link>
            </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
eventsInfoPage.propTypes = {
  eventName: PropTypes.string.isRequired,
  // eventImgSrc: PropTypes.string.isRequired,
  // eventRule: PropTypes.string.isRequired,
  // eventPrize: PropTypes.string.isRequired,
};
export default eventsInfoPage;
