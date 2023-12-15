import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { useRef,useLayoutEffect } from 'react';
import ElectricButton from "./ElectricButton";
import EventBox from "./EventBox";
const Workshops = () => {
  // useEffect(() => {
  // }, []);
  return (
    <div id="Workshops">
      <div className="Workshop-top spacer"></div>
      <h1 className="center">Workshops</h1>
      <div className="events">

      <EventBox
          eventName="Workshop-1"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventRole=""
        />
          <EventBox
          eventName="Workshop-2"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventRole=""
        />
        <EventBox
          eventName="Workshop-3"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventRole=""
        />

      </div>

      <div class="spacer layer2"> </div>
    </div>
  );
};

export default Workshops;
