// components/Workshops.js
import React from 'react';

const Workshops = () => {
  return (
    <div>
      <h2 className="center">Workshops</h2>
      <div className="events">
        <div className="events-box" data-aos="fade-right">
          <img src="" alt="" />
          {/* Add content for the first workshop */}
        </div>
        <div className="events-box" data-aos="fade-up">
          {/* Add content for the second workshop */}
        </div>
        <div className="events-box" data-aos="fade-left">
          {/* Add content for the third workshop */}
        </div>
        {/* Add more workshop boxes as needed */}
      </div>

      <div class="spacer layer2"> </div>
    </div>
  );
};

export default Workshops;
