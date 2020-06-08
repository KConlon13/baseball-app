import React from 'react';
import './App.css';
import TeamContainer from './TeamContainer';
// import RosterModal from "./RosterModal";
// import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
// import RosterModal from './RosterModal';

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

  // Secondary Data Fetch/ClickHandler for Roster's of Clicked Team
  // teamIdClickHandler = (response_obj) => {
  //   this.setState({
  //     modalClicked: true,
  //   })

  //   let team_id = response_obj.team_id;
  //   fetch(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=${team_id}`)
  //   .then(response=>response.json())
  //   .then(data => data !== [] ? (this.setState({modalContainer: data})) : null) 
  //   // console.log("HEY")
  // }

  // This bug is being caused by the fact the the clickhandler is covering the modal trigger as well, so the modal is being triggered before the fetch call is being completed

  // Would like to create a modal to pop up and display all of the clicked team's 40 man roster
  // Modal design provided by Semantic UI React
  
  
  render(){
    
  //   if (this.state.modalContainer !== []) {
  //     console.log(this.state.modalContainer.roster_40.queryResults)
  //  } 

    return (
      <div className="App">
        <TeamContainer teamsArray={this.state.mainContainer} teamIdClickHandler={this.teamIdClickHandler} rosterArray={this.state.modalContainer}/>
        {/* {this.state.modalClicked ? <RosterModal /> : null} */}
      </div>
    );
  }
}

export default App;
