import { useState, useEffect } from "react";
import react from "react";
import "./../../assets/css/timer.css";

function Timer(props){
    // Declare variables
    const defaultState = {
        status: 'STOP',
        count: 0 
    }
    const [myHeroTimer, setMyHeroTimer]= useState(defaultState);
    
    // Render timer when it is turned on
    useEffect(() =>{
    switch(myHeroTimer.status){
        case "START": 
        var intervalId = setTimeout(() => {
            if(myHeroTimer.count > 0){
            setMyHeroTimer( (t) => {
                return{
                ...t, 
                count: t.count - 1
                }
            })
            }
        }, 1000);
        break;
        default:
        break;
    }
    return () => clearTimeout(intervalId)
    }, [myHeroTimer.status, myHeroTimer.count]);
    

    // Update the status/count of the timer
    function updateTimer(event){
    const {name, value} = event.target;
    setMyHeroTimer( (t) => {
        return {
        ...t, 
        [name]: value
        }
    })
    }

    // Reset timer to default state
    function resetMyHeroTimer(){
    setMyHeroTimer(defaultState)
    }

    return(
        <>
            <h1 className="timer-display text-shadow-black-1 text-deku-yellow-1">Time: {myHeroTimer.count}</h1>
            <input 
                className="timer-input"
                type="number" 
                min="0"
                name="count"
                value={myHeroTimer.count} 
                onChange={updateTimer}
            />
            <button 
                className="btn btn-success start-btn text-shadow-black-1 big-zoom"
                name="status" 
                value="START" 
                onClick={updateTimer}>Start
            </button>
            <button
                className="btn btn-danger stop-btn text-shadow-black-1 big-zoom"
                name="status" 
                value="STOP"
                onClick={updateTimer}>Stop
            </button>
            <button 
                className="btn btn-secondary reset-btn text-shadow-black-1 big-zoom"
                onClick={resetMyHeroTimer}>Reset
            </button>
        </>
    );
}

export default Timer;
