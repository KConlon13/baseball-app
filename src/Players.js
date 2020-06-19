import React from 'react';
import './App.css';
import { Input, Icon, Label, Card } from 'semantic-ui-react'
// import _ from 'lodash'; 

class Players extends React.Component {
    state={
        playerData: [],
        searchTerm: '',
        searchClicked: false,
    }

    handleOnChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearchClick = () => {
        this.makeApiCall(this.state.searchTerm)
    }

    makeApiCall = (searchInput) => {
        console.log(searchInput)
        if (searchInput.split(' ').length > 1) {
            searchInput = searchInput.split(' ').reverse()[0]
        }
    }

    // SOLUTION!!!!
    // Needed this below! VVV
    // Need to rewrite code to search through the array thats been fetched, and return and render those cards, rather than taking the search item and fetching that
    // Take the search term from handleSearchClick and add another state array (or container) to push all of the matching items in from the original fetch to be displayed

    componentDidMount(){
        fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='%25'")
        .then(resp => resp.json())
        .then(data => data.search_player_all.queryResults.row ? this.setState({playerData: data.search_player_all.queryResults.row}) : null )
    }
    
    render(){ 
    let results
    if (this.state.playerData === []) {
        
            return results = (
                <div class="results transition">
                <br/>
                <div class="message empty"><div class="header">No results found.</div></div>
                </div>
            )
    } else {

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
    // if (this.state.playerData !== []) {
    //     results = this.state.playerData.map(p => {
    //         // console.log(p)
    //         let posColor
    //         switch(p.position){
    //             case "P":
    //                 posColor="blue"
    //                 break;
    //             case "1B":
    //                 posColor="red"
    //                 break;
    //             case "2B":
    //                 posColor="teal"
    //                 break;
    //             case "SS":
    //                 posColor="green"
    //                 break;
    //             case "3B":
    //                 posColor="olive"
    //                 break;
    //             case "OF":
    //                 posColor="purple"
    //                 break;
    //             default:
    //                 posColor="pink"
    //                 break;
    //         }

    //     return  <div class="ui centered cards">
    //                 <div class="ui card">
    //                     <div class="content">
    //                     <div class="header">{p.name_display_first_last}</div>
    //                     <div class="meta">{p.team_full}</div>
    //                         <div class="description">
    //                             <Label circular color={posColor}>{p.position}</Label>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         })
    // } else {
    //    return results = (
    //         <div class="results transition">
    //         <br/>
    //         <div class="message empty"><div class="header">No results found.</div></div>
    //         </div>
    //     )
    // }

        return (
            <div>
                <h1>Search Player Stats</h1>
                        <input 
                            name="text"
                            type="text"
                            placeholder="Search By Last Name"
                            onChange={(e)=>this.handleOnChange(e)}
                            value={this.state.searchTerm}
                        />
                        <button name='search' inverted circular link onClick={() => this.handleSearchClick()}>
                            <Icon name="search"/>
                        </button>
                  <br/>
                  <br/>
                {results}
            </div>
        )
    }
}

export default Players;