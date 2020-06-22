import React from 'react';
import './App.css';
import { Input, Icon, Label, Card, Button } from 'semantic-ui-react'
// import _ from 'lodash'; 

class Players extends React.Component {
    state={
        playerData: [],
        searchTerm: '',
        searchClicked: false,
        searchResults: [],
    }

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearchClick = (e) => {
        document.getElementById("searchInput").value = ""
        this.initiateSearch(this.state.searchTerm)
    }

    initiateSearch = (searchInput) => {
        searchInput = searchInput.toLowerCase()
        let results = []
        this.state.playerData.map(player => {
            let lastName = player.name_last.toLowerCase()
            let firstName = player.name_first.toLowerCase()
            let fullName = player.name_display_first_last.toLowerCase()
            // if (
            //     searchInput === fullName ||
            //     // searchInput.slice(0, 3) === lastName.slice(0, 3) ||
            //     // searchInput.slice(0, 3) === firstName.slice(0, 3) ||
            //     // searchInput.slice(0, 4) === lastName.slice(0, 4) ||
            //     // searchInput.slice(0, 4) === firstName.slice(0, 4) ||
            //     // searchInput.slice(0, 5) === lastName.slice(0, 5) ||
            //     // searchInput.slice(0, 5) === firstName.slice(0, 5) ||
            //     searchInput === lastName || 
            //     searchInput === firstName
            //     ){
            //     results.push(player)
            // }

            // Test 1
            if (searchInput === fullName){
                results.push(player)
            } else if(searchInput === lastName){
                results.push(player)
            } else if (searchInput === firstName){
                results.push(player)
            } 
            // else if (searchInput.slice(0, 3) === lastName.slice(0, 3)){
            //     results.push(player)
            // } else if (searchInput.slice(0, 3) === firstName.slice(0, 3)){
            //     results.push(player)
            // } else if (searchInput.slice(0, 4) === lastName.slice(0, 4)){
            //     results.push(player)
            // } else if (searchInput.slice(0, 4) === firstName.slice(0, 4)){
            //     results.push(player)
            // } else if (searchInput.slice(0, 5) === lastName.slice(0, 5)){
            //     results.push(player)
            // } else if (searchInput.slice(0, 5) === firstName.slice(0, 5)){
            //     results.push(player)
            // }


        })
        this.setState({
            searchResults: results
        })
    }

    componentDidMount(){
        fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='%25'")
        .then(resp => resp.json())
        .then(data => data.search_player_all.queryResults.row ? this.setState({playerData: data.search_player_all.queryResults.row}) : null )
    }
    
    render(){ 
    let results

    // NEXT TASK is to fix the 'No Results Found' feature to only show when a search was completed
    // Secondary Task is to set up onClick for the enter button
    // Tertiary Task is to allow search to pick up 
    // Side Task to clear search field after search has been completed

    if (this.state.searchResults.length === 0 ) {
        results = (
            <div class="results transition">
                <br/>
                <div class="message empty"><div class="header">No results found.</div></div>
            </div>
    )} else {
        results = this.state.searchResults.map(p => {
            let posColor
            switch(p.position){
                case "P":
                    posColor="blue"
                    break;
                case "1B":
                    posColor="red"
                    break;
                case "2B":
                    posColor="teal"
                    break;
                case "SS":
                    posColor="green"
                    break;
                case "3B":
                    posColor="olive"
                    break;
                case "OF":
                    posColor="purple"
                    break;
                default:
                    posColor="pink"
                    break;
        }
        return  <div class="ui centered cards">
                    <div class="ui card">
                        <div class="content">
                        <div class="header">{p.name_display_first_last}</div>
                        <div class="meta">{p.team_full}</div>
                            <div class="description">
                                <Label circular color={posColor}>{p.position}</Label>
                            </div>
                        </div>
                    </div>
                </div>
            })
    }
        return (
            <div>
                <h1>Search Player Stats</h1>
                        <input 
                            id="searchInput"
                            name="text"
                            type="text"
                            placeholder="Search for Player"
                            onChange={(e)=>this.handleOnChange(e)}
                            value={this.state.searchTerm}
                        />
                        <button name='search' inverted circular link onClick={(e) => this.handleSearchClick(e)}>
                            <Icon name="search"/>
                        </button>
                  <br/>
                  <br/>
                {results}
                {/* {this.state.searchResults.length === 0 && this.state.searchClicked === true ? 
                    <div class="results transition">
                    <br/>
                    <div class="message empty"><div class="header">No results found.</div></div>
                </div> : results } */}
            </div>
        )
    }
}

export default Players;