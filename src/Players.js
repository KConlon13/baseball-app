import React from 'react';
import './App.css';
import { Input, Icon, Label, Card } from 'semantic-ui-react'
// import _ from 'lodash'; 

class Players extends React.Component {
    state={
        playerData: [],
        searchData: []
    }

    handleOnChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            searchData: e.target.value
        })
        this.handleSearch(e)
    }

    // componentDidMount(){
    //     this.handleSearch()
    // }
    handleSearch = (e) => {
        let searchTerm = this.state.searchData
        // console.log(e.target)
        // if (e.target.value !== null){
            fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${searchTerm}%25'`)
            .then(response=>response.json())
            .then(data => data.search_player_all.queryResults.row ? this.setState({playerData: data.search_player_all.queryResults.row}) : null)
        // } else {
            // console.log("Ah fuck")
        // }
    }

    keyPressed = (e) => {
        if (e.key === "Enter"){
            this.setState({
                searchData: e.target.value
            })
            this.handleSearch(e)
        }
    }

    // ORIGINAL FETCH
    componentWillMount(){
            fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='a%25'`)
            .then(response=>response.json())
            .then(data => this.setState({playerData: data.search_player_all.queryResults.row})) 
    }
    
    render(){ 
    let results
    if (this.state.playerData) {
        results = this.state.playerData.map(p => {
            // console.log(p)

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

            return <div class="ui centered cards">
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
    } else {
        results = (
            <div class="results transition">
            <br/>
            <div class="message empty"><div class="header">No results found.</div></div>
            </div>
        )
    }

        return (
            <div>
                <h1>Search Player Stats</h1>
                  <Input
                    onChange={(e)=>this.handleOnChange(e)}
                    icon={<Icon name='search' inverted circular link onClick={(e)=> this.handleSearch(e)} onKeyPress={this.keyPressed}/>}
                    placeholder='Search...'
                  />
                  <br/>
                  <br/>
                {results}
            </div>
        )
    }
}

export default Players;