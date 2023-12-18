import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import ErrorPage from "./error-page";
import App from "./App";
import CodeSprint from "./Pages/codeSprintPage";
import CodeCombat from "./Pages/codeCombat";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoxCricket from "./Pages/BoxCricket";
import FutsalPage from "./Pages/FutsalPage";
import EventsInfoPage from "./Components/EventsInfoPage";
import GameofTag from "./Assets/GAME OF TAG.pdf"
import CommingSoon from "./Components/CommingSoon";
import OurTeam from "./Components/OurTeam";

const root = createRoot(document.getElementById("root"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} errorElement={<ErrorPage/>}/>
    <Route path="/CommingSoon" element={<CommingSoon />} />
    <Route path="/OurTeam" element={<OurTeam />} />
    <Route
      path="/Workshop-1"
      element={
        <EventsInfoPage
          eventName="Workshop-1"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventLink="CommingSoon"
          eventRules="Comming soon"
          eventPrize="Comming soon"
          eventFile="Comming soon"
        />
      }
    />
        <Route
      path="/Workshop-2"
      element={
        <EventsInfoPage
          eventName="Workshop-2"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventLink="CommingSoon"
          eventRules=" Comming soon"
          eventPrize="Comming soon"
          eventFile="Comming soon"
        />
      }
    />
        <Route
      path="/Workshop-3"
      element={
        <EventsInfoPage
          eventName="Workshop-3"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventLink="CommingSoon"
          eventRules=" Comming soon"
          eventPrize="Comming soon"
          eventFile="Comming soon"
        />
      }
    />

    <Route path="/CodeSprint" element={<CodeSprint />} />
    <Route path="/CodeCombat" element={<CodeCombat />} />
    <Route
      path="/TrackMaster"
      element={
        <EventsInfoPage
          eventName="Track Master"
          eventImgSrc="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      }
    />
    <Route
      path="/ArduNova"
      element={
        <EventsInfoPage
          eventName="ArduNova"
          eventImgSrc="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          eventLink="CommingSoon"
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    />
    <Route
      path="/TrackMaster"
      element={
        <EventsInfoPage
          eventName="Track Master"
          eventImgSrc="https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          eventLink="CommingSoon"
          eventRules="jbljkb"
          eventPrize=""
          eventFile=""
        />
      }
    />
    <Route
      path="/TechDebate"
      element={
        <EventsInfoPage
          eventName="Tech Debate"
          eventImgSrc="https://images.app.goo.gl/MSNDkCZxzWdpAY6UA"
          eventLink="CommingSoon"
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    />

    <Route
      path="/Quizzix"
      element={
        <EventsInfoPage
          eventName="Quizzix"
          eventImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwMlx5Qt08vQwNMRjMw02f8G2d1TCBcsj3w&usqp=CAU"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    />
    <Route path="/BoxCricket" element={<BoxCricket />} />
    <Route path="/Futsal" element={<FutsalPage />} />
    <Route
      path="/GameofTag"
      element={
        <EventsInfoPage
          eventName="Game of Tag"
          eventImgSrc="https://global-uploads.webflow.com/60dfb7bd2f9507f7616a7cac/60e11d929d6c02ebfd8b62ae_41-DSC02043.jpg"
          eventLink=""
          eventRules="-Each team shall be represented by 2 students – 1 boy and 1 girl. There can be two injury substitutes – 1 boy and 1 girl.
          -Each round will consist of 1 minute chase and 1 minute evade. The format will be a Round Robin group stage competition with the top 2 teams qualifying for the finals.
          -The Final will consist of 2 one minute chases and 2 one minute evades (alternate)."
          eventPrize=""
          eventFile={GameofTag}
        />
      }
    ></Route>

    <Route
      path="/EnergeticEuphoriaExpress"
      element={
        <EventsInfoPage
          eventName="Energetic Euphoria Express (Group Dance)"
          eventImgSrc="https://www.stgpresents.org/images/education/Dance-This/dt26.jpg"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    ></Route>
        <Route
      path="/BeatBattleBonanza"
      element={
        <EventsInfoPage
          eventName="Beat Battle Bonanza (Dance Battle)"
          eventImgSrc="https://live.staticflickr.com/65535/40820359833_08709cae31_b.jpg"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    ></Route>
            <Route
      path="/TheVocalNirvana"
      element={
        <EventsInfoPage
          eventName="The Vocal Nirvana (Singing Solo/ Duet) Battle of Bands"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/8/87/Roxette_at_the_Beacon%2C_September_2012.jpg"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    ></Route>
            <Route
      path="/NukkadNatak"
      element={
        <EventsInfoPage
          eventName="Nukkad Natak(Street Play)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Nukkad_Natak.jpg/2560px-Nukkad_Natak.jpg"
          eventLink=""
          eventRules="- Only ONE team per college.
- Vulgarity of any sense will not be tolerated.
- Street Play must not offend any religion or profession.
- Any political party or political leader should not be targeted.
- If the time exceeds 15 min then the team will be disqualified.
- No pre-recorded music will be allowed.
- NO microphone will be given or allowed for the performance.
- Participants should bring their own props.
- Rehearsal prior to the event on the field will not be allowed.
- The decisions of the Judges will be final, beyond dispute, and binding on all the teams"
          eventPrize="Prize : INR 1000"
          eventFile=""
        />
      }
    ></Route>
            <Route
      path="/JokesJubilation"
      element={
        <EventsInfoPage
          eventName="Jokes Jubilation (Stand up)"
          eventImgSrc="https://theimission.weebly.com/uploads/6/1/9/1/61915227/copy-of-dsc-4585_orig.jpg"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    ></Route>
                <Route
      path="/RainbowPalette"
      element={
        <EventsInfoPage
          eventName="Rainbow Palette(Face painting)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/7/7e/Self_traditional_folk_face_painting_%282%29.jpg"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    ></Route>
                <Route
      path="/TheRetailTherapy"
      element={
        <EventsInfoPage
          eventName="The Retail Therapy (Fashion show)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Magdalena_Frackowiak.jpg/800px-Magdalena_Frackowiak.jpg"
          eventLink=""
          eventRules=""
          eventPrize=""
          eventFile=""
        />
      }
    ></Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

root.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
