import React from 'react';
import './App.css';


class App extends React.Component {
  state={
    mainContainer: [],
  }
  
  componentDidMount(){
    fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='cespedes%25'")
    .then(response=>response.json())
    .then(data => this.setState({mainContainer: data.search_player_all.queryResults.row}, console.log(data.search_player_all.queryResults.row))) 
  }
  // Testing here to see how the API endpoints work and how I will be able to fetch individual players
  render(){
    return (
      <div className="App">
        <h1>{this.state.mainContainer.name_display_first_last}</h1>
        <h3>{this.state.mainContainer.position} - {this.state.mainContainer.team_full}</h3>
      </div>
    );
  }
}

export default App;
