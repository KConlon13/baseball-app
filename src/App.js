import React from 'react';
import './App.css';
import TeamContainer from './TeamContainer';
// import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

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

    return (
      <div className="App">
        <TeamContainer teamsArray={this.state.mainContainer} teamIdClickHandler={this.teamIdClickHandler} rosterArray={this.state.modalContainer}/>
      </div>
    );
  }
}

export default App;
