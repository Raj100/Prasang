import React from "react";
import EventBox from "./EventBox";
const Workshops = () => {
  // useEffect(() => {
  // }, []);
  return (
    <>
    <div id="Workshops">
      <h1 className="center">Workshops</h1>
      <div className="events">

      <EventBox
          eventName="Workshop-1"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventRole="Coming Soon"
          eventLink="Workshop-1"
        />
          <EventBox
          eventName="Workshop-2"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventRole="Coming Soon"
          eventLink="Workshop-2"
        />
        <EventBox
          eventName="Workshop-3"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventRole="Coming Soon"
          eventLink="Workshop-3"
        />
      </div>
    </div>
    </>
  );
};

export default Workshops;
