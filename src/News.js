import React from 'react';
import './App.css';
import { Progress, Loader, Grid, Menu, Segment, Divider } from 'semantic-ui-react'
import Transactions from "./Transactions";
import Injuries from "./Injuries";

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
        let currentDistance = this.openingDayCountdown()

        return(
            <div>
                <h2 id="countdown-title">Countdown to Opening Day</h2>
                <h5 id="countdown-subtitle">(From "Spring" Training)</h5>
                <div id="progress-bar">
                    <Progress indicating percent={4*(25 - currentDistance)}/>
                </div>
                <h4 id="demo"><Loader active inline content="Summoning the Baseball Gods..."/></h4>

                <div id="news-segment">
                    <Segment>
                        <Grid columns={2} relaxed='very'>
                            <Grid.Column width={8}>
                                <Transactions/>
                            </Grid.Column>
                            <Divider vertical />
                            <Grid.Column width={8}>
                                <Injuries/>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </div>
            </div>
        )
    }
}

export default News;