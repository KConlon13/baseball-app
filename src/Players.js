import React from 'react';
import './App.css';
import { Icon, Label } from 'semantic-ui-react'
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
        e.preventDefault();
        this.initiateSearch(this.state.searchTerm)
        this.setState({
            searchTerm: "",
            searchClicked: true,
        })
    }

    initiateSearch = (searchInput) => {
        searchInput = searchInput.toLowerCase()
        let results = []
        this.state.playerData.map(player => {
            let lastName = player.name_last.toLowerCase()
            let firstName = player.name_first.toLowerCase()
            let fullName = player.name_display_first_last.toLowerCase()

            if (searchInput === fullName){
                results.push(player)
            } else if(searchInput === lastName){
                results.push(player)
            } else if (searchInput === firstName){
                results.push(player)
            } 
            else if (searchInput.slice(0, 3) === lastName.slice(0, 3)){
                results.push(player)
            } else if (searchInput.slice(0, 3) === firstName.slice(0, 3)){
                results.push(player)
            } else if (searchInput.slice(0, 4) === lastName.slice(0, 4)){
                results.push(player)
            } else if (searchInput.slice(0, 4) === firstName.slice(0, 4)){
                results.push(player)
            } else if (searchInput.slice(0, 5) === lastName.slice(0, 5)){
                results.push(player)
            } else if (searchInput.slice(0, 5) === firstName.slice(0, 5)){
                results.push(player)
            }
            return results;
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
    let results;
    if (this.state.searchResults.length === 0 && this.state.searchClicked === true) {
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
                <h1>Analyze Player Stats</h1>
                    <form onSubmit={(e)=> this.handleSearchClick(e)}>
                        <input 
                            id="searchInput"
                            name="text"
                            type="text"
                            placeholder="Search for Player"
                            onChange={(e)=>this.handleOnChange(e)}
                            value={this.state.searchTerm}
                            />
                        <button name='search' id="searchButton" type="submit" inverted circular link >
                            <Icon name="search"/>
                        </button>
                    </form>
                  <br/>
                  <br/>
                {results}
            </div>
        )
    }
}

export default Players;