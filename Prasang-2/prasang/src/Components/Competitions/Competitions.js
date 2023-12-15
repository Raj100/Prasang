 import React from 'react';

const Competitions = () => {
  return (
    <div className="competitions">
      <h2 className="center">Competitions</h2>
      <div className="events">
        <div className="events-box" data-aos="fade-right">
          <h1>Code sprint</h1>
          <div className="event-content">
            <div className="event-front">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsF2oWS1t9H2Pt6sEarjlEvh7sGm5XJT86kA&usqp=CAU"
                alt="Avatar"
              />
            </div>
            <div className="event-back">
              <h1>Architect & Engineer</h1>
              <p>Register for Code sprint competition</p>
              <button>Register</button>
            </div>
          </div>
        </div>
        
        <div class="events-box" data-aos="fade-up">
        <h1>CodeCombat</h1>
        <div class="event-content">
          <div class="event-front">
            <img class="event-img" src="https://miro.medium.com/v2/resize:fit:1000/1*OhrAmSvpDWk0gzb_08PkhQ.png"/>
          </div>
          <div class="event-back">
            <h1></h1>
            <p>Architect & Engineer</p>
            <button>Register</button>
          </div>
        </div>
      </div>
      <div class="events-box" data-aos="fade-left">
        <h1>ArduNova</h1>
        <div class="event-content">
          <div class="event-front">
            <img class="event-img"
              src=" 
                            https://www.shutterstock.com/image-photo/chatbot-chat-ai-concept-artificial-260nw-2353739099.jpg"/>
          </div>
          <div class="event-back">
            <h1></h1>
            <p>Architect & Engineer</p>
            <button>Register</button>
          </div>
        </div>
      </div>
      <div class="events-box" data-aos="fade-left">
        <h1>Track Master</h1>
        <div class="event-content">
          <div class="event-front">
            <img class="event-img"
              src="
                            https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          <div class="event-back">
            <h1></h1>
            <p>Architect & Engineer</p>
            <button>Register</button>
          </div>
        </div>
      </div>
      <div class="events-box" data-aos="fade-left">
        <h1>Quizzix</h1>
        <div class="event-content">
          <div class="event-front">
            <img class="event-img"
              src="
                            https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwMlx5Qt08vQwNMRjMw02f8G2d1TCBcsj3w&usqp=CAU"/>
          </div>
          <div class="event-back"/>
            <h1></h1>
            <p>Architect & Engineer</p>
            <button>Register</button>
          </div>
        </div>
      </div>
      {/* <div class="events-box" data-aos="fade-left">
        <h1>TechDebate</h1>
        <div class="event-content">
          <div class="event-front">
            <img class="event-img" src="https://images.app.goo.gl/MSNDkCZxzWdpAY6UA"/>
          </div>
          <div class="event-back">
            <h1> </h1>
            <p>Architect & Engineer</p>
            <button>Register</button>
          </div>
        </div> */}
      </div>
  );
};

export default Competitions;
