import React from 'react';
import './App.css';
import { Search } from 'semantic-ui-react'
import _ from 'lodash'; 

let results
class Players extends React.Component {
    state={
        playerData: [],
    }

    handleSearchChange = (e, { value }) => {
        let searchTerm = value
        console.log(searchTerm)
        if (value.length > 0 || this.state.playerData > 0){
            fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${searchTerm}%25'`)
            .then(response=>response.json())
            .then(data => this.setState({playerData: data.search_player_all.queryResults.row}))
        } else {
            value = ""
        }
    }

    
    // ORIGINAL FETCH
    // componentDidMount(){
        //     fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${searchTerm}%25'`)
        //     .then(response=>response.json())
        //     .then(data => this.setState({playerData: data})) 
        // }
        
    render(){

    if (this.state.playerData.length > 0){
        results = this.state.playerData.map(p => {
            // console.log("this here is a player", p),
            return <div class="ui segment">
                <h4>{p.name_display_first_last}</h4>
            </div>
        })
    }

    if (this.state.playerData !== []){
        console.log(this.state.playerData)
    }

        return (
            <div>
                <h1>Search Player Stats</h1>
                <Search
                    fluid
                    // loading={isLoading}
                    // onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                    })}
                    // results={results}
                    // value={value}
                    // {...this.props}
                />
                {results}
            </div>
        )
    }
}

export default Players;