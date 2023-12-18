import React from 'react';

const FAQs = () => {
  return (
    <div className="Faqs wrapper">
      <h1>Frequently Asked Questions</h1>

      <div className="faq" data-aos="fade-up">
        <button className="accordion">
          Who can participate?
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="pannel">
          <p>
            Krushi is a Public Charitable Trust designed to carry out farming on
            an extensive scale using natural and sustainable methods.
          </p>
        </div>
      </div>

      <div className="faq" data-aos="fade-up">
        <button className="accordion">
          What is the registration procedure?
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="pannel">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur dolor
            ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
