import React from 'react';
import './App.css';
import { Input, Icon } from 'semantic-ui-react'
// import _ from 'lodash'; 

class Players extends React.Component {
    state={
        playerData: [],
        searchData: []
    }

    handleOnChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchData: e.target.value
        })
        this.handleSearch(e)
    }


    handleSearch = (e) => {
        let searchTerm = this.state.searchData
        // console.log(e.target)
        if (this.state.searchData !== []){
            fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${searchTerm}%25'`)
            .then(response=>response.json())
            .then(data => this.setState({playerData: data.search_player_all.queryResults.row}, console.log("YO")))

        } else {
            console.log("Ah fuck")
        }
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
    // componentDidMount(){
        //     fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${searchTerm}%25'`)
        //     .then(response=>response.json())
        //     .then(data => this.setState({playerData: data})) 
        // }
        
    render(){
    let results
    if (this.state.playerData !== []){
        results = this.state.playerData.map(p => {
            // console.log("this here is a player", p),
            return <div class="ui segment">
                <h4>{p.name_display_first_last}</h4>
            </div>
        })
    } else {
        return (
            <div class="results transition">
            <div class="message empty"><div class="header">No results found.</div></div>
          </div>
        )
    }

        return (
            <div>
                <h1>Search Player Stats</h1>
                {/* <Search
                    fluid
                    // loading={isLoading}
                    // onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearch, 500, {
                    leading: true,
                    })}
                    // results={results}
                    // value={value}
                    // {...this.props}
                /> */}
                  <Input
                    onChange={(e)=>this.handleOnChange(e)}
                    icon={<Icon name='search' inverted circular link onClick={(e)=> this.handleSearch(e)} onKeyPress={this.keyPressed}/>}
                    placeholder='Search...'
                  />
                {results}
            </div>
        )
    }
}

export default Players;