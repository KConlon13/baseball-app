import React from 'react';
import './App.css';
import { Progress, Loader } from 'semantic-ui-react'

// This component should have a navbar at the top to allow users to view 
// Injuries & Transactions

class News extends React.Component {
    state={
        countdownDayCalc: "",
    }

    openingDayCountdown = () => {
        let countdownDate = new Date("July 23, 2020 19:05:00").getTime();
        let x = setInterval(function(){
            let now = new Date().getTime();
            let distance = countdownDate - now;
            let days = Math.floor(distance/(1000 * 60 * 60 * 24))
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (document.getElementById("demo")) {
                document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds "
            }
            if (distance < 0) {
                clearInterval(x)
                document.getElementById("demo").innerHTML = "BASEBALL IS BACK BABAYYY!"
            }
        }, 1000)

        let dayNow = new Date();
        let dayDistance = countdownDate - dayNow
        let dayCalc = Math.floor(dayDistance/(1000 * 60 * 60 * 24))
        return dayCalc;
    }

    render(){
        // Returning value for Progress bar & invoking countdown clock function
        let fuck = this.openingDayCountdown()

        return(
            <div>
                <h2 id="countdown-title">Countdown to Opening Day</h2>
                <h5 id="countdown-subtitle">(From "Spring" Training)</h5>
                <div id="progress-bar">
                    <Progress indicating value={fuck + "days left"} percent={4*(25 - fuck)}/>
                </div>
                <h4 id="demo"><Loader active inline content="Summoning the Baseball Gods..."/></h4>
            </div>
        )
    }
}

export default News;