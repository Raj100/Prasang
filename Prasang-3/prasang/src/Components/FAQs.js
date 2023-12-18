import React, { useEffect } from "react";
import "./FAQs.css";

const FAQs = () => {
  useEffect(() => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
      const question = faq.querySelector(".question");

      const clickHandler = () => {
        faq.classList.toggle("active-faq");
      };

      question.addEventListener("click", clickHandler);

      // Cleanup event listener on component unmount
      return () => {
        question.removeEventListener("click", clickHandler);
      };
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="Faqs">
      <h1>Frequently Asked Questions</h1>
      <div className="faq" data-aos="fade-up">
        <div className="question" >
          <h3>Who can participate?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            maxime illum nostrum alias non quod iusto aspernatur minus deleniti,
            assumenda officiis modi. Est dolores harum possimus, dignissimos
            maiores nesciunt tempora.
          </p>
        </div>
      </div>

      <div className="faq" data-aos="fade-up">
        <div className="question">
          <h3>What is the registration procedure?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur
            dolor ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>

      <div className="faq" data-aos="fade-up">
        <div className="question">
          <h3>What will be the mode of conduct of the hackathon?</h3>
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
            saepe molestiae distinctio asperiores cupiditate consequuntur
            dolor ullam, iure eligendi harum eaque hic corporis debitis porro
            consectetur voluptate rem officiis architecto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
