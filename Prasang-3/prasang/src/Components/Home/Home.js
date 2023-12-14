import React from "react";
import "./Home.css";
// import mandalaArt from "../Assets/abc.png";
// import prasang1 from "../Assets/prasang-1.png";
// import prasangText from "../Assets/prasang.png";
// import prasang2 from "../Assets/prasang-2.png";
// import teslacoil from "../Assets/Tesla-coil.png";
import { useEffect } from "react";
class Electricity {
  constructor(selector) {
    this.svg = document.querySelector(selector);
    this.run();
  }

  render(iteration) {
    let d = this.calculatePoints(0, 0, 500, 80, iteration);
    this.svg.querySelector('g path:first-child').setAttribute('d', d);
    this.svg.querySelector('g path:last-child').setAttribute('d', d);
  }

  calculatePoints(x, y, width, height, iteration) {
    let points = [[x, height / 2]];
    let maxPoints = 10;
    let chunkRange = width / maxPoints;
    for(let i = 0; i < maxPoints; i++) {
      let cx = chunkRange * i + (Math.cos(iteration + i) * chunkRange);
      let cy = Math.random() * height/1.5;
      points.push([cx, cy]);
    }
    
    points.push([width, height / 2]);
    
    let d = points.map((point) => point.join(','));
    return 'M' + d.join(',');
  }

  run() {
    let fps = 25,
        now,
        delta,
        then = Date.now(),
        interval = 1000 / fps,
        iteration = 0,
        loop = () => {
          requestAnimationFrame(loop);

          now = Date.now();
          delta = now - then;
          if (delta > interval) {
            then = now - (delta % interval);

            // update stuff
            this.render(iteration++);
          }
        };
    loop();
  }
}
const Home = () => {
  useEffect(() => {
    new Electricity('.electricity svg');
  }, []);
  return (
    <div className="home" id="Home">
      {/* <img className="mandala-art" src={teslacoil} alt="" width="400" height="400"/>
    <img className="mandala-art-right" src={teslacoil} alt=""width="400px" height="400"/> */}
    <div class="electricity">
        <div class="plus-diode">
          <div class="ball">
            <div class="shine"></div>
          </div>
          <div class="socket"></div>
          <div class="socket foot"></div>
          <div class="ring"></div>
          <div class="ring medium"></div>
          <div class="ring small"></div>
        </div>
        <div class="minus-diode">
          <div class="ball">
            <div class="shine"></div>
          </div>
          <div class="socket"></div>
          <div class="socket foot"></div>
          <div class="ring"></div>
          <div class="ring medium"></div>
          <div class="ring small"></div>
        </div>
        <svg id="svg" viewBox="0 0 500 200">
          <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
            </filter>
          </defs>
          <g>
            <path
              d="M0,100,500,100"
              fill="none"
              stroke="#42ee77"
              filter="url(#f1)"
            ></path>
            <path d="M0,100,500,100" fill="none" stroke="#ffcc02"></path>
          </g>
        </svg>
      </div>

      <svg
        className="Lightning-left "
        viewBox="0 0 100 2000"
        width="100"
        height="2000"
      >
        <g>
          <path
            id="Lightning1"
            d="M38 2000L17 1889L32 1778L49 1667L5 1556L14 1444L13 1333L35 1222L10 1111L7 1000L6 889L17 778L2 667L26 556L81 444L23 333L67 222L58 111L60 0L99 0L86 111L76 222L58 333L90 444L40 556L41 667L58 778L48 889L45 1000L47 1111L64 1222L58 1333L35 1444L45 1556L87 1667L72 1778L37 1889L59 2000Z"
            fill="#fecc02"
          ></path>
          <path
            id="Lightning2"
            d="M41 2000L1 1889L33 1778L2 1667L27 1556L44 1444L4 1333L29 1222L15 1111L32 1000L9 889L30 778L20 667L23 556L8 444L41 333L27 222L26 111L29 0L82 0L88 111L28 222L82 333L68 444L51 556L35 667L80 778L42 889L85 1000L93 1111L66 1222L27 1333L99 1444L91 1556L55 1667L44 1778L3 1889L81 2000Z"
            fill="#fecc02"
          ></path>
          <path
            id="Lightning3"
            d="M17 2000L31 1889L36 1778L29 1667L10 1556L8 1444L47 1333L6 1222L5 1111L10 1000L43 889L42 778L38 667L38 556L9 444L23 333L35 222L29 111L43 0L58 0L76 111L84 222L60 333L24 444L80 556L70 667L61 778L93 889L47 1000L40 1111L38 1222L95 1333L9 1444L45 1556L79 1667L47 1778L38 1889L64 2000Z"
            fill="#fecc02"
          ></path>
        </g>
      </svg>

      <svg
        className="Lightning-right"
        viewBox="0 0 100 2000"
        width="100"
        height="2000"
        version="1.1"
      >
        <path
          id="Lightning-1-right"
          d="M17 2000L31 1889L36 1778L29 1667L10 1556L8 1444L47 1333L6 1222L5 1111L10 1000L43 889L42 778L38 667L38 556L9 444L23 333L35 222L29 111L43 0L58 0L76 111L84 222L60 333L24 444L80 556L70 667L61 778L93 889L47 1000L40 1111L38 1222L95 1333L9 1444L45 1556L79 1667L47 1778L38 1889L64 2000Z"
          fill="#fecc02"
        ></path>
        <path
          id="Lightning-2-right"
          d="M79 2000L51 1833L21 1667L17 1500L21 1333L21 1167L21 1000L2 833L49 667L69 500L49 333L32 167L43 0L63 0L33 167L59 333L80 500L88 667L30 833L35 1000L52 1167L35 1333L46 1500L71 1667L67 1833L94 2000Z"
          fill="#fecc02"
        ></path>
        <path
          id="Lightning-3-right"
          d="M16 2000L57 1889L56 1778L48 1667L8 1556L12 1444L29 1333L7 1222L32 1111L69 1000L14 889L35 778L84 667L50 556L39 444L11 333L5 222L53 111L27 0L38 0L80 111L53 222L52 333L85 444L96 556L85 667L84 778L44 889L77 1000L75 1111L53 1222L77 1333L14 1444L41 1556L78 1667L74 1778L89 1889L56 2000Z"
          fill="#fecc02"
        ></path>
      </svg>
      <div>
        <div className="logo">
          <h1>PraSang</h1>
          <p>Organised by EEE Department NIT GOA </p>
          <h3>Welcome to Prasang!</h3>
          <p>
            The Electrical and Electronics Engineering (EEE) department at NIT
            Goa proudly presents Prasang, an annual extravaganza that celebrates
            innovation, creativity, and the spirit of engineering excellence.
            Prasang is more than just an event; it's a platform that brings
            together budding engineers, industry experts, and enthusiasts to
            explore, learn, and showcase their skills. Be a part of this dynamic
            experience, where ideas flourish, collaborations thrive, and the joy
            of discovery is paramount. Save the date, gear up for an
            unforgettable journey, and we eagerly anticipate meeting you in
            Prasang!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
