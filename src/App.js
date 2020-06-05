import React from 'react';
import './App.css';
import TeamContainer from './TeamContainer'

class App extends React.Component {
  state={
    mainContainer: [],
  }
  
  // Inital Data Fetch for Teams
  componentDidMount(){
    fetch("http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'")
    .then(response=>response.json())
    .then(data => this.setState({mainContainer: data.team_all_season.queryResults.row} )) 
  }

  // Secondary Data Fetch/ClickHandler for Roster's of Clicked Team
  teamIdClickHandler = (response_obj) => {
    let team_id = response_obj.team_id;
    fetch(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=${team_id}`)
    .then(response=>response.json())
    .then(data => console.log(data, "hello you did it good job")) 
  }
  
  // Would like to create a modal to pop up and display all of the clicked team's 40 man roster
  // Modal design provided by Semantic UI React
  
  render(){
    return (
      <div className="App">
        <TeamContainer teamsArray={this.state.mainContainer} teamIdClickHandler={this.teamIdClickHandler}/>
      </div>
    );
  }
}

export default App;
