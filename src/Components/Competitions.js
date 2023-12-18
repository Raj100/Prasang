import React from "react";
import AOS from "aos";
import "aos/dist/aos";
import { useEffect } from "react";
import codeCombatImg from "../Assets/Code Combat.png";
import EventBox from "./EventBox";

const Competitions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const showEvents = (eventCategory) => {
    document.querySelectorAll(".compet").forEach((event) => {
      event.style.display = "none";
    });

    document.querySelector(`.compet.${eventCategory}`).style.display = "flex";

    document.querySelectorAll(".events-menu li").forEach((button) => {
      button.classList.remove("events-active");
    });

    document
      .querySelector(`.${eventCategory}-button`)
      .classList.add("events-active");
  };
  return (
    <div id="Events">
      <div className="Competitions-top spacer"></div>
      <h1 className="center">Events</h1>
      <div className="events-menu">
        <ul>
          <li
            className="technical-event-button events-active"
            onClick={() => showEvents("technical-event")}
          >
            Technical
          </li>
          <li
            className="sports-event-button"
            onClick={() => showEvents("sports-event")}
          >
            Sports
          </li>
          <li
            className="cultural-event-button"
            onClick={() => showEvents("cultural-event")}
          >
            Cultural
          </li>
        </ul>
      </div>
      <div className="events technical-event compet">
        <EventBox
          eventName="Code sprint (24 hour Hackathon)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wikimania_hackathon_2.JPG/800px-Wikimania_hackathon_2.JPG"
          eventRole="24 HOUR HACKATHON
Date :Jan
Team Size: max 3 people"
          eventLink="CodeSprint"
        />
        <EventBox
          eventName="CodeCombat"
          eventImgSrc={codeCombatImg}
          eventRole="Competitive Coding
Date :Jan
Team Size: max 3 people"
          eventLink="CodeCombat"
        />
        <EventBox
          eventName="ArduNova"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="ArduNova"
        />
        <EventBox
          eventName="Track Master"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/7/7a/40365_Line_Follower_Robot.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: 
1st prize: 5k
2nd prize: 3k
3rd prize: 1k"
          eventLink="TrackMaster"
        />
        <EventBox
          eventName="Quizzix"
          eventImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwMlx5Qt08vQwNMRjMw02f8G2d1TCBcsj3w&usqp=CAU"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="Quizzix"
        />
        <EventBox
          eventName="Tech Debate"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VIII._Internationales_Finale_Warschau.JPG/220px-VIII._Internationales_Finale_Warschau.JPG"
          eventRole="Team of 2 member"
          eventLink="TechDebate"
        />
        <EventBox
          eventName="Quest Circuit"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/1L-LLM_Scavenger_Hunt_%283952858025%29.jpg/800px-1L-LLM_Scavenger_Hunt_%283952858025%29.jpg"
          eventRole="Date: 28 Jan
Time: 
Venue:
Team Size: 2-4 Members"
          eventLink="QuestCircuit"
        />
      </div>

      <div className="events sports-event compet">
        <EventBox
          eventName="BoxCricket"
          eventImgSrc="https://media.hudle.in/venues/b11383c4-36e2-48f0-8b19-e6e7c1b77d55/photo/663934d9ca9699e474f795d2b77b956a59377c0e"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="BoxCricket"
        />
        <EventBox
          eventName="Futsal"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/0/06/Futebol_Salao_Pan2007.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="Futsal"
        />
        <EventBox
          eventName="Game of Tag"
          eventImgSrc="https://global-uploads.webflow.com/60dfb7bd2f9507f7616a7cac/60e11d929d6c02ebfd8b62ae_41-DSC02043.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="GameofTag"
        />
        <EventBox
          eventName="Tug of War"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a3/Irish_600kg_euro_chap_2009_%28cropped%29.JPG"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="TugofWar"
        />
      </div>

      <div className="events cultural-event compet">
        <EventBox
          eventName="Energetic Euphoria Express (Group Dance)"
          eventImgSrc="https://www.stgpresents.org/images/education/Dance-This/dt26.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="EnergeticEuphoriaExpress"
        />
        <EventBox
          eventName="Beat Battle Bonanza (Dance Battle)"
          eventImgSrc="https://live.staticflickr.com/65535/40820359833_08709cae31_b.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="BeatBattleBonanza"
        />
        <EventBox
          eventName="The Vocal Nirvana (Singing Solo/ Duet) Battle of Bands"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/8/87/Roxette_at_the_Beacon%2C_September_2012.jpg"
          eventRole="VOCAL NIRVANA consists of 3 categories :
SOLO SENSATION:-Solo singing competition.
DYNAMIC DUO :- duet singing competition.
ROCKIN’ BAND :- Battle of bands.
Date:
Time:
Venue:
Team Size: "
          eventLink="TheVocalNirvana"
        />
        <EventBox
          eventName="Nukkad Natak (Street Play)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Nukkad_Natak.jpg/2560px-Nukkad_Natak.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="NukkadNatak"
        />
        <EventBox
          eventName="Jokes Jubilation (Stand up)"
          eventImgSrc="https://theimission.weebly.com/uploads/6/1/9/1/61915227/copy-of-dsc-4585_orig.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="JokesJubilation"
        />
        <EventBox
          eventName="Rainbow Palette (Face painting)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/7/7e/Self_traditional_folk_face_painting_%282%29.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="RainbowPalette"
        />
        <EventBox
          eventName="The Retail Therapy (Fashion show)"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Magdalena_Frackowiak.jpg/800px-Magdalena_Frackowiak.jpg"
          eventRole="Date:
Time:
Venue:
Team Size: "
          eventLink="TheRetailTherapy"
        />
      </div>
    </div>
  );
};

export default Competitions;
