import React from 'react';
import './App.css';
import TeamContainer from './TeamContainer'

class App extends React.Component {
  state={
    mainContainer: [],
  }
  
  componentDidMount(){
    fetch("http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'")
    .then(response=>response.json())
    .then(data => this.setState({mainContainer: data.team_all_season.queryResults.row}, console.log(data.team_all_season.queryResults.row))) 
  }

  // Testing Here to Create Baseball Team Cards
  render(){
    return (
      <div className="App">
        <TeamContainer teamsArray={this.state.mainContainer}/>
      </div>
    );
  }
}

export default App;
