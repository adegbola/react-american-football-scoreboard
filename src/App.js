//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


const awayTeam = "Tiger";
const homeTeam = "Lions";
const timer = "00:03"
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lions, setLions]=useState(32)
  const [tigers, setTiger] = useState(32)

  const homeTouchDown = ()=>{
    setLions(lions+7);
  }
  const fieldGoal = ()=>{
    setLions(lions+3);
  }

  const awayTouchDown = () => {
    setTiger(tigers + 7);
  }
  const awayFieldGoal = () => {
    setTiger(tigers + 3);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lions}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{tigers}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTouchDown}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fieldGoal}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={awayTouchDown}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={awayFieldGoal}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
