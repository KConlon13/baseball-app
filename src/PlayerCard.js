import React from 'react';
import './App.css';
import { Label, Button, Modal, Header, Divider, Card, Item } from 'semantic-ui-react'

class PlayerCard extends React.Component {
    state={
        modalClicked: false,
        modalCareerContainer: [],
        modalLastYearContainer: [],
    }

    playerIdClickHandler = () => {
        this.setState({
            modalClicked: true,
        })
      
        let player_id = this.props.obj.player_id;
        fetch(`https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id=${player_id}`)
        .then(response=>response.json())
        .then(data => 
            (this.setState({modalCareerContainer: data.sport_career_hitting.queryResults.row})) 
        )

        fetch(`https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id=${player_id}`)
        .then(response=>response.json())
        .then(data => 
            (this.setState({modalLastYearContainer: data.sport_hitting_tm.queryResults.row}))
        ) 
    }

    render(){
        let statContent;
        if (this.state.modalCareerContainer && this.state.modalLastYearContainer) {
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>2019 Batting Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalLastYearContainer.g}</Item.Extra> 
                        <Item.Extra><b>Hits </b>{this.state.modalLastYearContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalLastYearContainer.so}</Item.Extra> 
                        <Item.Extra><b>OBP: </b>{this.state.modalLastYearContainer.obp}</Item.Extra> 
                        <Item.Extra><b>At Bats: </b>{this.state.modalLastYearContainer.ab}</Item.Extra> 
                        <Item.Extra><b>Doubles: </b>{this.state.modalLastYearContainer.d}</Item.Extra> 
                        <Item.Extra><b>Stolen Bases: </b>{this.state.modalLastYearContainer.sb}</Item.Extra> 
                        <Item.Extra><b>SLG: </b>{this.state.modalLastYearContainer.slg}</Item.Extra> 
                        <Item.Extra><b>Runs: </b>{this.state.modalLastYearContainer.r}</Item.Extra> 
                        <Item.Extra><b>Triples: </b>{this.state.modalLastYearContainer.t}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalLastYearContainer.bb}</Item.Extra> 
                        <Item.Extra><b>OPS: </b>{this.state.modalLastYearContainer.ops}</Item.Extra> 
                        <Item.Extra><b>AVG: </b>{this.state.modalLastYearContainer.avg}</Item.Extra> 
                        <Item.Extra><b>Home Runs: </b>{this.state.modalLastYearContainer.hr}</Item.Extra> 
                        <Item.Extra><b>RBI: </b>{this.state.modalLastYearContainer.rbi}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>

              <Item>
                <Item.Content>
                    <Item.Header>Career Batting Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalCareerContainer.g}</Item.Extra> 
                        <Item.Extra><b>Hits </b>{this.state.modalCareerContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalCareerContainer.so}</Item.Extra> 
                        <Item.Extra><b>OBP: </b>{this.state.modalCareerContainer.obp}</Item.Extra> 
                        <Item.Extra><b>At Bats: </b>{this.state.modalCareerContainer.ab}</Item.Extra> 
                        <Item.Extra><b>Doubles: </b>{this.state.modalCareerContainer.d}</Item.Extra> 
                        <Item.Extra><b>Stolen Bases: </b>{this.state.modalCareerContainer.sb}</Item.Extra> 
                        <Item.Extra><b>SLG: </b>{this.state.modalCareerContainer.slg}</Item.Extra> 
                        <Item.Extra><b>Runs: </b>{this.state.modalCareerContainer.r}</Item.Extra> 
                        <Item.Extra><b>Triples: </b>{this.state.modalCareerContainer.t}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalCareerContainer.bb}</Item.Extra> 
                        <Item.Extra><b>OPS: </b>{this.state.modalCareerContainer.ops}</Item.Extra> 
                        <Item.Extra><b>AVG: </b>{this.state.modalCareerContainer.avg}</Item.Extra> 
                        <Item.Extra><b>Home Runs: </b>{this.state.modalCareerContainer.hr}</Item.Extra> 
                        <Item.Extra><b>RBI: </b>{this.state.modalCareerContainer.rbi}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>
            </Item.Group>
        } else if (this.state.modalCareerContainer){
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>Career Batting Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalCareerContainer.g}</Item.Extra> 
                        <Item.Extra><b>Hits </b>{this.state.modalCareerContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalCareerContainer.so}</Item.Extra> 
                        <Item.Extra><b>OBP: </b>{this.state.modalCareerContainer.obp}</Item.Extra> 
                        <Item.Extra><b>At Bats: </b>{this.state.modalCareerContainer.ab}</Item.Extra> 
                        <Item.Extra><b>Doubles: </b>{this.state.modalCareerContainer.d}</Item.Extra> 
                        <Item.Extra><b>Stolen Bases: </b>{this.state.modalCareerContainer.sb}</Item.Extra> 
                        <Item.Extra><b>SLG: </b>{this.state.modalCareerContainer.slg}</Item.Extra> 
                        <Item.Extra><b>Runs: </b>{this.state.modalCareerContainer.r}</Item.Extra> 
                        <Item.Extra><b>Triples: </b>{this.state.modalCareerContainer.t}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalCareerContainer.bb}</Item.Extra> 
                        <Item.Extra><b>OPS: </b>{this.state.modalCareerContainer.ops}</Item.Extra> 
                        <Item.Extra><b>AVG: </b>{this.state.modalCareerContainer.avg}</Item.Extra> 
                        <Item.Extra><b>Home Runs: </b>{this.state.modalCareerContainer.hr}</Item.Extra> 
                        <Item.Extra><b>RBI: </b>{this.state.modalCareerContainer.rbi}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>
            </Item.Group>
        } else if (this.state.modalLastYearContainer) {
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>2019 Batting Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalLastYearContainer.g}</Item.Extra> 
                        <Item.Extra><b>Hits </b>{this.state.modalLastYearContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalLastYearContainer.so}</Item.Extra> 
                        <Item.Extra><b>OBP: </b>{this.state.modalLastYearContainer.obp}</Item.Extra> 
                        <Item.Extra><b>At Bats: </b>{this.state.modalLastYearContainer.ab}</Item.Extra> 
                        <Item.Extra><b>Doubles: </b>{this.state.modalLastYearContainer.d}</Item.Extra> 
                        <Item.Extra><b>Stolen Bases: </b>{this.state.modalLastYearContainer.sb}</Item.Extra> 
                        <Item.Extra><b>SLG: </b>{this.state.modalLastYearContainer.slg}</Item.Extra> 
                        <Item.Extra><b>Runs: </b>{this.state.modalLastYearContainer.r}</Item.Extra> 
                        <Item.Extra><b>Triples: </b>{this.state.modalLastYearContainer.t}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalLastYearContainer.bb}</Item.Extra> 
                        <Item.Extra><b>OPS: </b>{this.state.modalLastYearContainer.ops}</Item.Extra> 
                        <Item.Extra><b>AVG: </b>{this.state.modalLastYearContainer.avg}</Item.Extra> 
                        <Item.Extra><b>Home Runs: </b>{this.state.modalLastYearContainer.hr}</Item.Extra> 
                        <Item.Extra><b>RBI: </b>{this.state.modalLastYearContainer.rbi}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>
            </Item.Group>
        }

        let posColor
        switch(this.props.obj.position){
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
        return(
            <div>
                <div class="ui centered cards">
                    <div class="ui card">
                        <div class="content">
                            <div class="header">{this.props.obj.name_display_first_last}</div>
                            <div class="meta">{this.props.obj.team_full}</div>
                            <div class="description">
                                <Label circular color={posColor}>{this.props.obj.position}</Label>
                            </div>
                        </div>

             <Card.Content extra onMouseEnter={()=>this.playerIdClickHandler()}>
                {this.state.modalClicked === false ?
                    <Button>View Stats</Button>
                    : null }

                {this.state.modalClicked ? 
                    <Modal trigger={<Button>View Stats</Button>} >
                    {this.state.modalClicked ? 
                        <Modal.Content>
                            <Header as="h1">{this.props.obj.name_display_first_last}</Header>
                            <div id="playercard-modal-subheader">
                                <Header as="h4">{this.props.obj.team_full} - {this.props.obj.position}</Header>
                            </div>
                            <div id="player-stat-modal-divider"><Divider/></div>
                            {statContent ? <Modal.Content>{statContent}</Modal.Content> : 
                                <Modal.Content>
                                    <Header as="h4">No Information Available On This Player</Header>
                                </Modal.Content>}
                        </Modal.Content>
                        : 
                        <Modal.Content>
                            <Header as="h1">Sorry!</Header>
                            <div id="player-stat-modal-divider"><Divider/></div>
                            <div id="playercard-modal-subheader">
                                <Header as="h4">No Information Available On This Player</Header>
                            </div>
                        </Modal.Content>
                        }
                    </Modal> 
                    : null }

             </Card.Content>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerCard;

// Next Step!
// Create separate player card component based on pitcher stats
// So in Players component, create a conditional based on their position
// If they are a position player- pass their data to PlayerCard (as it is now) and render that card
// If they are a pitcher, pass their data to a new component called PitcherCard and render that card with new fetches for pitching data 