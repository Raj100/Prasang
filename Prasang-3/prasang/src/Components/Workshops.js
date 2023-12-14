import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Workshops = () => {
  useEffect(() => {
    
  }, []);
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
                <div class="container">
                  <div class="border-gradient">
                    <button>
                      <span class="vh">Register</span>
                    </button>
                    <span class="button-text" aria-hidden="true">
                      Register
                    </span>
                  </div>
                  <svg
                    id="scribbles"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 50"
                  >
                    <filter
                      color-interpolation-filters="sRGB"
                      id="glow"
                      x="-50"
                      y="-50"
                      width="200"
                      height="200"
                      filterUnits="userSpaceOnUse"
                    >
                      <feGaussianBlur stdDeviation="10" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="2" />
                      </feComponentTransfer>
                      <feBlend in2="SourceGraphic" />
                    </filter>
                    <filter
                      color-interpolation-filters="sRGB"
                      id="filter"
                      x="-50"
                      y="-50"
                      width="200"
                      height="200"
                      filterUnits="userSpaceOnUse"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.15 0"
                        numOctaves="1"
                        result="warp"
                      ></feTurbulence>
                      <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale="5"
                        in="SourceGraphic"
                        in2="warp"
                      />
                    </filter>
                    <filter
                      color-interpolation-filters="sRGB"
                      id="filter2"
                      x="-50"
                      y="-50"
                      width="200"
                      height="200"
                      filterUnits="userSpaceOnUse"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.2 0"
                        numOctaves="1"
                        result="warp"
                      ></feTurbulence>
                      <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale="10"
                        in="SourceGraphic"
                        in2="warp"
                      />
                    </filter>
                    <filter
                      color-interpolation-filters="sRGB"
                      id="filter3"
                      x="-50"
                      y="-50"
                      width="200"
                      height="200"
                      filterUnits="userSpaceOnUse"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.2 0.2"
                        numOctaves="1"
                        result="warp"
                      ></feTurbulence>
                      <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale="5"
                        in="SourceGraphic"
                        in2="warp"
                      />
                    </filter>
                    <filter
                      color-interpolation-filters="sRGB"
                      id="filter4"
                      x="-50"
                      y="-50"
                      width="200"
                      height="200"
                      filterUnits="userSpaceOnUse"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.2 0.2"
                        numOctaves="1"
                        result="warp"
                      ></feTurbulence>
                      <feDisplacementMap
                        xChannelSelector="R"
                        yChannelSelector="G"
                        scale="5"
                        in="SourceGraphic"
                        in2="warp"
                      />
                    </filter>

                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient"
                    >
                      <stop offset="0%" stop-color="#ffe17e" />
                      <stop offset="10%" stop-color="#f65426" />
                      <stop offset="50%" stop-color="#fff" />
                      <stop offset="100%" stop-color="#6ff5ff" />
                    </linearGradient>

                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient2"
                      gradientTransform="rotate(65)"
                    >
                      <stop offset="0%" stop-color="#ffe17e" />
                      <stop offset="10%" stop-color="#f65426" />
                      <stop offset="50%" stop-color="#fff" />
                      <stop offset="100%" stop-color="#6ff5ff" />
                    </linearGradient>

                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient3"
                    >
                      <stop offset="0%" stop-color="#69eeff" />
                      <stop offset="50%" stop-color="#fff" />
                      <stop offset="100%" stop-color="#69eeff" />
                    </linearGradient>

                    <g
                      id="lightning"
                      stroke-width="1"
                      filter="url(#glow)"
                      stroke="url(#gradient)"
                    >
                      <rect
                        filter="url(#filter)"
                        class="strike"
                        stroke="url(#gradient)"
                        x="0"
                        y="0"
                        width="100"
                        height="50"
                        rx="38.59"
                        fill="none"
                        stroke="#191919"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                      />
                      <rect
                        filter="url(#filter2)"
                        class="strike"
                        stroke="url(#gradient2)"
                        x="0"
                        y="0"
                        width="100"
                        height="50"
                        rx="38.59"
                        fill="none"
                        stroke="#191919"
                        stroke-miterlimit="10"
                        stroke-width="2"
                      />
                      <rect
                        filter="url(#filter3)"
                        class="strike"
                        stroke="url(#gradient3)"
                        x="0"
                        y="0"
                        width="100"
                        height="50"
                        rx="38.59"
                        fill="none"
                        stroke="#191919"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                      />
                      <rect
                        filter="url(#filter2)"
                        class="strike"
                        stroke="url(#gradient3)"
                        x="0"
                        y="0"
                        width="100"
                        height="50"
                        rx="38.59"
                        fill="none"
                        stroke="#191919"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <rect
                        filter="url(#filter4)"
                        class="strike"
                        stroke="url(#gradient3)"
                        x="0"
                        y="0"
                        width="100"
                        height="50"
                        rx="38.59"
                        fill="none"
                        stroke="#191919"
                        stroke-miterlimit="10"
                        stroke-width="1.5"
                      />
                    </g>
                  </svg>
                </div>
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
