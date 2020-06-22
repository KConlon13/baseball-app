import React from 'react';
import './App.css';
import { Input, Icon, Label, Card } from 'semantic-ui-react'
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

    handleSearchClick = () => {
        this.initiateSearch(this.state.searchTerm)
    }

    initiateSearch = (searchInput) => {
        searchInput = searchInput.toLowerCase()
        console.log(searchInput)
        let results = []
        this.state.playerData.map(player => {
            let lastName = player.name_last.toLowerCase()
            let firstName = player.name_first.toLowerCase()
            let fullName = player.name_display_first_last.toLowerCase()
            if (searchInput === lastName || searchInput === firstName || searchInput === fullName){
                console.log("this is what im working on")
                results.push(player)
            }
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
    if (this.state.searchResults.length === 0 && this.state.searchClicked === true) {
        return results = (
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
                            name="text"
                            type="text"
                            placeholder="Search for Player"
                            onChange={(e)=>this.handleOnChange(e)}
                            value={this.state.searchTerm}
                        />
                        <button name='search' inverted circular link onClick={() => this.handleSearchClick()}>
                            <Icon name="search"/>
                        </button>
                  <br/>
                  <br/>
                {/* {results} */}
                {this.state.searchResults.length === 0 && this.state.searchClicked === true ? 
                    <div class="results transition">
                    <br/>
                    <div class="message empty"><div class="header">No results found.</div></div>
                </div> : results
            }
            </div>
        )
    }
}

export default Players;