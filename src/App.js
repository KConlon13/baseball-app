import React from 'react';
import './App.css';
import TeamContainer from './TeamContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react'
import Players from "./Players";
import Scores from "./Scores";
import Navbar from "./Navbar";

class App extends React.Component {
  state={
    mainContainer: [],
    modalClicked: false,
    modalContainer: [],
  }
  
  // Inital Data Fetch for Teams
  componentDidMount(){
    fetch("http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'")
    .then(response=>response.json())
    .then(data => this.setState({mainContainer: data.team_all_season.queryResults.row} )) 
  }
  
  render(){
    
         const TeamHomePage = () => {
          return <TeamContainer teamsArray={this.state.mainContainer} teamIdClickHandler={this.teamIdClickHandler} rosterArray={this.state.modalContainer}/>
         }
    

    return (
      <div className="App">

        <Router>
        {/* <div class="ui secondary menu"> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={TeamHomePage}>
              {/* <a class="active item">Home</a> */}
            </Route>
            <Route path="/players" component={Players}>
               {/* <a class="item">Players</a> */}
          </Route>
          <Route path="/scores" component={Scores}>
              {/* <a class="item">Scores</a> */}
          </Route>

          {/* <div class="right menu">
              <a class="ui item">Logout</a>
          </div> */}
          </Switch>

        {/* </div> */}
        </Router>

        {/* <Divider/> */}
        {/* <TeamContainer teamsArray={this.state.mainContainer} teamIdClickHandler={this.teamIdClickHandler} rosterArray={this.state.modalContainer}/> */}
      </div>
    );
  }
}

export default App;
