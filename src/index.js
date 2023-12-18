import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import ErrorPage from "./error-page";
import App from "./App";
import CodeSprint from "./Pages/codeSprintPage";
import CodeCombat from "./Pages/codeCombat";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FutsalPage from "./Pages/FutsalPage";
import EventsInfoPage from "./Components/EventsInfoPage";
import GameofTag from "./Assets/GAME OF TAG.pdf";
import CommingSoon from "./Components/CommingSoon";
import OurTeam from "./Components/OurTeam";

const root = createRoot(document.getElementById("root"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} errorElement={<ErrorPage />} />
    <Route path="/CommingSoon" element={<CommingSoon />} />
    <Route path="/OurTeam" element={<OurTeam />} />
    <Route
      path="/Workshop-1"
      element={
        <EventsInfoPage
          eventName="Workshop-1"
          eventImgSrc="https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg"
          eventLink="/CommingSoon"
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
          eventLink="/CommingSoon"
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
          eventLink="/CommingSoon"
          eventRules=" Comming soon"
          eventPrize="Comming soon"
          eventFile="Comming soon"
        />
      }
    />

    <Route path="/CodeSprint" element={<CodeSprint />} />
    <Route path="/CodeCombat" element={<CodeCombat />} />

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
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/7/7a/40365_Line_Follower_Robot.jpg"
          eventLink="CommingSoon"
eventRules="• The robot must be autonomous/automatic.
• Ready-made robots are not allowed,the teams can not participate if they use any ready-
made robots, for example - Lego kits.
• The participants must arrange their batteries.Power supply must be on board.
• The autonomous robot must avoid doing any kind of damage to the arena while running
• While moving around the track, nothing may be left behind or a mark may be made. Any
robot discovered causing damage to the track will be promptly eliminated. The organizers
reserve the right to make the ultimate choice.
• The robot must be in the given dimensions specified by organisers.
• Dimensions of line follower robot 25cm- 25cm-30cm(Length *width *Height)
• Max weight of line follower robot 950 grams.
• Use sealed batteries, immobilised electrolyte type (gel cell, lithium-ion batteries, Nickel-
cadmium battery, or dry Cell)
• Electrical voltage of the robot should not exceed 12 Volt (DC) at any time during
competition.
• In construction all building materials are allowed until the robot satisfies all the above
conditions.
• Objections to the decisions of the referees will not be accepted. The decisions of all officials
regarding these rules and the conduct of the event shall be final.
• In case of any disputes/discrepancies, the organisers decision will be final and binding.
• The robot should be made before coming to the competition.
• It is not allowed to use any kind of turbine or any other equipment to boost the speed of the
line follower robot.
• Each team will have five minute to calibrate, before the race starts.
• Any team that is discovered to have changed its code after submitting its robots will be
instantly eliminated from the competition. However, they are free to modify any additional
hardware.
• Only one autonomous robot is permitted per team.
• No team member may enter the track or touch the robot once it has started.
• The robot will be positioned at the tracks beginning point when it begins. When the robot
starts, only one team member may be in close proximity to the playing area.
• The run won’t begin until the organizers give the signal.
• The starting procedure of the bot should be simple and should not involve giving the bot any
manual force or impulse in any direction.
• The teams have to submit a manufacturing video in
which they can show various images or videos explaining the journey of making the robot.
• Once a team completes their registration, their robot will be submitted to us and will be
checked(along with the code)"
          eventPrize="1st prize: 5k
          2nd prize: 3k
          3rd prize: 1k"
          eventFile=""
        />
      }
    />
    <Route
      path="/TechDebate"
      element={
        <EventsInfoPage
          eventName="Tech Debate"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VIII._Internationales_Finale_Warschau.JPG/220px-VIII._Internationales_Finale_Warschau.JPG"
          eventLink="CommingSoon"
eventRules="1. Format Overview:
The debate will be team-based with two teams: Affirmative and Negative.
The resolution will be a contemporary and debatable topic.
The debate will consist of constructive speeches, crossfire, and rebuttals.
 
2. Time Allocation:
a. Opening Statement:
- Affirmative: 1:30 minutes
- Negative: 1:30 minutes
 
b. Discussion and rebuttals
-10 minutes
c. Final Focus Speeches:
- Affirmative: 1 minutes
- Negative: 1 minutes
 
3. Debate Structure:
a. Constructive Speeches:
- Affirmative presents their case, followed by the Negative.
- Each team outlines their main arguments and provides supporting evidence.
 
b. Crossfire:
- Teams engage in a brief crossfire to question and challenge each other's arguments.
 
c. Rebuttal Speeches:
- Affirmative rebuts Negative's case and presents additional arguments.
- Negative rebuts Affirmative's case and presents additional arguments.
 
d. Summary Speeches:
- Teams summarize their key arguments and respond to the opposing team's case.
 
e. Final Focus Speeches:
- Teams crystallize their positions, emphasizing key arguments without introducing new content.
 
4. Judging Criteria:
Judges will evaluate based on clarity, logic, evidence quality, and overall persuasiveness.
Points are awarded for teamwork, effective communication, and responsiveness to opponents.
 
5. Time Management:
Use a timer for each segment of the debate to ensure adherence to time limits.
Designate a timekeeper to notify teams when their time is about to expire.
Enforce time penalties for exceeding limits to maintain fairness.
 
6. Technology Usage:
Allow the use of notes and limited technology for research during preparation.
No electronic devices during speeches to maintain focus.
 
7. Tiebreakers:
In case of a tie, judges may consider speaker points or provide additional criteria for evaluation.
By implementing this Modified Public Forum debate format and rulebook, you can create a team-based event within a two-hour timeframe. Adjustments can be made to time limits and rules based on specific event needs and constraints.
 
8. Important Points to be noted:
a. Participants can register as a team of 2 (// A total of 4 teams will participate at the event day//). Registration can be made online through Google Forms.
b. Topic will be decided through chits 30 minutes before the allotted time. The positive or negative side will be decided through a coin toss.
c. Prize money (1st Rs.3500, 2nd Rs.1500)
d. The final round will consist of Q&A sessions from the audience.
e. Last day of registration: till 2 weeks after the official brochure gets released
 
Contact Details:
​M. Tej Deep​​+91 6301319967
​Rounak Soni ​​+91 7879485361
​Ramesh Choudhary ​+91 9987048871"
          eventPrize="Prize: 1st 3500, 2nd 1500"
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
          eventLink="/CommingSoon"
          eventRules="Quiz will be conducted in two rounds - Preliminary and Finale.
-The Preliminary Round will be a ‘Pen and Paper’ Round.
-4 Top Scoring Teams will qualify for the next round.
-The Round structure of the quiz will be elaborated upon at the event.
-Profanity in any form is not allowed and players are advised to be mindful of that.
-The use of unfair means will lead to immediate disqualification of the team from this event.
-Quizmaster’s decisions are final and binding in all possible scenarios.
CONTACT INFO :
Gunaditya Patil - +91 70660 57919
Arpita Sukhwal - +91 86963 86788"
          eventPrize="Prize: ₹7000"
          eventFile=""
        />
      }
    />
    <Route
      path="/QuestCircuit"
      element={
        <EventsInfoPage
          eventName="Quest Circuit"
          eventImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwMlx5Qt08vQwNMRjMw02f8G2d1TCBcsj3w&usqp=CAU"
          eventLink="/CommingSoon"
          eventRules="Participants should wear shoes and hair should be tied
-Any means of communication between teams would lead to disqualification
-Solution to clue will be broadcasted after a certain time while deducting certain points
-In the event of any conflict or dispute , the final decision will be descision will be made by
-organisers and all teams must comply with decision
 -Clues will be spread throughout a room
-Using online softwares for deducing clues will lead to disqualification
-First come first serve registration "
          eventPrize="Prize: ₹7000"
          eventFile=""
        />
      }
    />
    <Route path="/BoxCricket" element={
    <EventsInfoPage
      eventName="Box Cricket"
      eventImgSrc="https://media.hudle.in/venues/b11383c4-36e2-48f0-8b19-e6e7c1b77d55/photo/663934d9ca9699e474f795d2b77b956a59377c0e"
      eventLink="CommingSoon"
      eventRules="Team Format
1) Teams will consist of 6 players each side
2) The team should only have 4 male and 2 female players at any time in the ground/field.
3) The extra players can only play in case if any injury happens to the primary team member.
4) The replacement should be from the same gender. (Only a female can replace a female player).
Female specific rule:
1)Female Player need to bowl atleast one over.
2) Female needs to bowl one over between 1st to 4 th over.
Out rules
1) Only Direct Catch will be considered as out 2) Ball going outside the Box directly
without interference by opponent team will be considered as OUT.
3) Hit wicket will be considered OUT
4) Stumping and run out will also be considered as out.
5) No LBWs
6) If the keeper collects the ball before it passes the stumps for stumping, then stumping will be not valid
Scoring Rules
1) In case of NO BALLS and WIDE 1 run will be given to the opponent team. (No free hit)
2) Byes and Leg Byes are allowed (running between the wickets is required)
3) Players can score runs by running while the ball is in the ground.
4) Runs will be given in case ball goes outside the Box/ground after some distraction (not directly). Players need to swap the side to get that run.
5) Batting Team can score 2 runs 3 runs hitting the respective board on the field.
6) Batting team can get extra runs in case of over-throw.
Fielding and Other rules
1) One Bowler can bowl maximum 2 overs in an inning.
2) Each match will be of 6 overs.
3) 1 Over Batting Power Play where only 1 player is allowed to stay outside bowling crease.(Powerplay over decided by batting team and has to be male over)
4) No Runs behind the wicket.
5) In case of Tie, Super Over will be played.
6) The Non Striker has to stand completely inside the STUMP BOX.
7) UMPIRE DECISION WILL BE FINAL AND NO ARGUMENTS WILL BE ENTERTAINED
WITH THE UMPIRE
8) UMPIRE IN ANY OF THE ABOVE SITUATION MAY CALL OFF THE PLAY CONSIDERING WIN TO THE OPPONENTS TEAM.Batting rules
1)Batsmen to bat with at least one leg inside the batting crease before the ball is delivered only then runs will be valid.
2) 2 players should be behind the bowling crease and 2 players should be ahead of the bowling crease.
LAST MAN STANDS RULE
All 6 wickets are needed to bowl a team out. When the 5th wicket falls, the Last Man Stands
(on his own) The Last Man can only score 2, 4 or 6 off any ball. When the Last Man Stands,
he / she can only be run out at the batting crease (keepers end). If a batsman is run out under this rule he/she will not get any runs for completing the first run (in other words it's two
if he completes the two and zero if he does not).
Bowling rules:
• Underarm bowling is compulsory.
• Ball should be pitched beyond the no ball line otherwise it will be called no ball
.• Bowler has to ball within the given box i.e bowling crease.
• Any deviation from the above rules will be “No Ball”.
• Usual No ball, Wide ball, Byes and Overthrow will be applicable. • Side arm bowling is not allowed.
"
      eventPrize=""
      eventFile=""
    ></EventsInfoPage>} />
    <Route path="/Futsal" element={<FutsalPage />} />
    <Route
      path="/GameofTag"
      element={
        <EventsInfoPage
          eventName="Game of Tag"
          eventImgSrc="https://global-uploads.webflow.com/60dfb7bd2f9507f7616a7cac/60e11d929d6c02ebfd8b62ae_41-DSC02043.jpg"
          eventLink=""
          eventRules="-Each team shall be represented by 2 students 
– 1 boy and 1 girl. There can be two injury substitutes 
– 1 boy and 1 girl.
-Each round will consist of 1 minute chase and 1 minute evade. The format will be a Round Robin group stage competition with the top 2 teams qualifying for the finals.
-The Final will consist of 2 one minute chases and 2 one minute evades (alternate)."
          eventPrize=""
          eventFile={GameofTag}
        />
      }
    ></Route>
        <Route
      path="/TugofWar"
      element={
        <EventsInfoPage
          eventName="Tug of War"
          eventImgSrc="https://upload.wikimedia.org/wikipedia/commons/a/a3/Irish_600kg_euro_chap_2009_%28cropped%29.JPG"
          eventLink=""
eventRules="-Each department shall be represented by 1 team consisting of 8 boys and 4 girls.
-The format will be a Round Robin group stage competition with the top 2 teams qualifying for the finals.
-There can be all substitutes for all players. Each group stage match will be a single Tug. The Final will be a Best of Three Tugs.
"
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
eventRules="Judging criteria
○ Choreography
○ Concept
○ Facial expression
○ Energy
○ Overall performance
○ Stage usage
○ Synchronization
● Vulgarity and obscenity are left to the organizers' discretion. It may lead to disqualification (Songs are to be chosen accordingly).
● The decision taken by the judges will be final and binding.
● If the time limit exceeds, there will be a deduction of 5% score for every 10 seconds.
● No hazardous chemicals or flammable stuff to be used (It will result in disqualification)
● Intoxication of any form will lead to disqualification.
● Participants have to arrange accessories, costumes and props by themselves
● All the props which the group is going to use should be informed to the organizers in
advance.
● Participants need to get the songs on both pen drive and cd to avoid any discrepancies.
● Songs are to be submitted at the time of registration.
          "
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
eventRules="● VOCAL NIRVANA consists of 3 categories :
SOLO SENSATION:-Solo singing competition.
DYNAMIC DUO :- duet singing competition.
ROCKIN’ BAND :- Battle of bands.
● In case of more than 10 entries, an additional audition round shall be conducted. The date and mode(online/ offline) for audition round shall be intimated to the participant later by the organizers.
● Any kind of Plagiarism is strictly prohibited.
● The participant shall be free to sing one or more existing songs or may perform self composed songs.
● In case of self composed songs the lyrics are to be sent to any one of the contacts provided below on or before the last date of registration. The organizers bear the right to discard any entry in case of plagiarism or offensive lyrics.
● The songs must be in ENGLISH or HINDI ONLY.
● Participants should carry their own musical instruments.
● The judging will be based on Rhythm, Vocal Skills ,Stage presence, Improvisations and Originality.
● The Participants are requested to strictly adhere to the given time limit.
● 5 points shall be deducted for every  additional 10 seconds.
● Infringement of any of the provided guidelines shall lead to disqualification of the participant.
● The Registration deadline is ________________. (Please stick the deadline since no entries shall be accepted post the said date.)
● In case of any disputes, the decision of the organizing committee shall be final.
THE SOLO SENSATION:
● This is a solo singing competition.
● A maximum of 2 participants per Institute are allowed.
● The participants for this competition are requested to add a  sample video of their performance (Need not be the final song) during registration. (The video should not exceed 1 min).
● The shortlisted candidates shall be intimated by the Organisers.
● The final performance should not exceed 5 minutes.
● Either instrument or karaoke to be used.
● In case of a karaoke the track has to be be duly submitted to the organizers.
THE DYNAMIC DUO:-
● This is a duet singing competition.
● Only ONE team per Institute shall be permitted.
● Either instrument or karaoke to be used.
● In case of a karaoke the track has to be  duly submitted to the organizers.
● The performance should not exceed 7 minutes.
● It is mandatory for both the participants to showcase their vocal skills.
THE ROCKIN’ BAND:-
● This is the ultimate battle of bands.
● The band may consist of 4-8 members.
● Only ONE team per Institute shall be permitted.
● The performance should not exceed 10 minutes.
● The band may consist of a maximum of 2 singers and a minimum of 2 participants with instruments.
● Participants should carry their own musical instruments."
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
