import React from "react";
import ElectricButton from "../Components/ElectricButton";
import Navbar from "../Components/Navbar";

const FutsalPage = () => {
  return (
    <div>
      <div className="Events-main">
        <Navbar></Navbar>
        <div className="Events-info">
          <h1>Futsal</h1>
          <div className="Events-info-main">
            {/* <div className="Events-info-navigation">
              <ul>
                <li>Rules</li>
                <li>Prize</li>
              </ul>
            </div> */}
            <div>
              <ul>
                Fouls are penalized with a direct or indirect free kick and
                taken at the spot of the foul 
                <li>- Directis awarded due to </li>o
                Kicking o Tripping o Charging o Pushing o Tackles an opponent o
                Holds an opponent o Handles the ball • A penalty kick is awarded
                Players if thesefouls • An indirectfree kick is awarded if a GK
                commits any of the following • Other cautionable offences: o
                Player preventing GK to release the ball o Unsportsmanlike
                behaviour o Dissent o Delaying restart o Failure to respect
                distance Free Kicks • Must be taken within 4 seconds of the
                referees whistle • Opponents must be 10 feet away from the ball
                • Free kick beginning with 6th foul o Defending team player may
                not form a wall o The player taking the kick must be identified
                are committed by a player inside his own penalty area o Controls
                them ball with hands or feet in his own half for more than 4
                seconds o Touches the ball with his hands inside own penalty
                area after it has been deliberately kicked in by a team mate or
                inbounded from their hands o GK remains in penalty area o All
                other playersmust be behind an imaginary line behind the
                ball.Players must provide space to the player taking the kick. o
                Taken from penalty spot (modified) Kick in • A goal couldnot be
                directlyscored from a kick in • Opponent must provide distance
                of at least • Ball must be stationary • Must be played within 4
                seconds of the ball being stationary Goal Clearance • Must be
                taken within 4 seconds • Must be from goalkeepers hands (no drop
                kicks) • Can’tbe touched the goalie a second time until the ball
                is touched by another player (modified from opponent) • No goal
                could be scored directly from a goal clearance
              </ul>
            </div>
            <div>
              <ElectricButton></ElectricButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutsalPage;
