import React from 'react';
import './App.css';
import { Label, Button, Modal, Header, Divider, Card, Item } from 'semantic-ui-react'

class PitcherCard extends React.Component {
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
        fetch(`https://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id=${player_id}`)
        .then(response=>response.json())
        .then(data => 
            (this.setState({modalCareerContainer: data.sport_career_pitching.queryResults.row})) 
        )

        fetch(`https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id=${player_id}`)
        .then(response=>response.json())
        .then(data => 
            (this.setState({modalLastYearContainer: data.sport_pitching_tm.queryResults.row}))
        ) 
    }
    // Possible feature: Add WAR stat to pitcher stats below, which will need to be calculated
    render(){
        let statContent;
        if (this.state.modalCareerContainer && this.state.modalLastYearContainer) {
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>2019 Pitching Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalLastYearContainer.g}</Item.Extra>
                        <Item.Extra><b>Hits Allowed: </b>{this.state.modalLastYearContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalLastYearContainer.so}</Item.Extra> 
                        <Item.Extra><b>Saves: </b>{this.state.modalLastYearContainer.sv}</Item.Extra> 
                        <Item.Extra><b>Record: </b>{this.state.modalLastYearContainer.w}-{this.state.modalLastYearContainer.l}</Item.Extra> 
                        <Item.Extra><b>Innings Pitched: </b>{this.state.modalLastYearContainer.ip}</Item.Extra> 
                        <Item.Extra><b>WHIP: </b>{this.state.modalLastYearContainer.whip}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalLastYearContainer.bb}</Item.Extra> 
                        <Item.Extra><b>ERA: </b>{this.state.modalLastYearContainer.era}</Item.Extra> 
                        <Item.Extra><b>Complete Games: </b>{this.state.modalLastYearContainer.cg}</Item.Extra> 
                        <Item.Extra><b>HRs Allowed: </b>{this.state.modalLastYearContainer.hr}</Item.Extra> 
                        <Item.Extra><b>Win %: </b>{this.state.modalLastYearContainer.wpct}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>

              <Item>
                <Item.Content>
                    <Item.Header>Career Pitching Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalCareerContainer.g}</Item.Extra>
                        <Item.Extra><b>Hits Allowed: </b>{this.state.modalCareerContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalCareerContainer.so}</Item.Extra> 
                        <Item.Extra><b>Saves: </b>{this.state.modalCareerContainer.sv}</Item.Extra> 
                        <Item.Extra><b>Record: </b>{this.state.modalCareerContainer.w}-{this.state.modalCareerContainer.l}</Item.Extra> 
                        <Item.Extra><b>Innings Pitched: </b>{this.state.modalCareerContainer.ip}</Item.Extra> 
                        <Item.Extra><b>WHIP: </b>{this.state.modalCareerContainer.whip}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalCareerContainer.bb}</Item.Extra> 
                        <Item.Extra><b>ERA: </b>{this.state.modalCareerContainer.era}</Item.Extra> 
                        <Item.Extra><b>Complete Games: </b>{this.state.modalCareerContainer.cg}</Item.Extra> 
                        <Item.Extra><b>HRs Allowed: </b>{this.state.modalCareerContainer.hr}</Item.Extra> 
                        <Item.Extra><b>Win %: </b>{this.state.modalCareerContainer.wpct}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>
            </Item.Group>
        } else if (this.state.modalCareerContainer){
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>Career Pitching Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalCareerContainer.g}</Item.Extra>
                        <Item.Extra><b>Hits Allowed: </b>{this.state.modalCareerContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalCareerContainer.so}</Item.Extra> 
                        <Item.Extra><b>Saves: </b>{this.state.modalCareerContainer.sv}</Item.Extra> 
                        <Item.Extra><b>Record: </b>{this.state.modalCareerContainer.w}-{this.state.modalCareerContainer.l}</Item.Extra> 
                        <Item.Extra><b>Innings Pitched: </b>{this.state.modalCareerContainer.ip}</Item.Extra> 
                        <Item.Extra><b>WHIP: </b>{this.state.modalCareerContainer.whip}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalCareerContainer.bb}</Item.Extra> 
                        <Item.Extra><b>ERA: </b>{this.state.modalCareerContainer.era}</Item.Extra> 
                        <Item.Extra><b>Complete Games: </b>{this.state.modalCareerContainer.cg}</Item.Extra> 
                        <Item.Extra><b>HRs Allowed: </b>{this.state.modalCareerContainer.hr}</Item.Extra> 
                        <Item.Extra><b>Win %: </b>{this.state.modalCareerContainer.wpct}</Item.Extra> 
                    </div>
                </Item.Content>
              </Item>
            </Item.Group>
        } else if (this.state.modalLastYearContainer) {
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>2019 Pitching Stats</Item.Header>
                    <div class="player-card-modal-stat-grid">
                        <Item.Extra><b>Games Played: </b>{this.state.modalLastYearContainer.g}</Item.Extra>
                        <Item.Extra><b>Hits Allowed: </b>{this.state.modalLastYearContainer.h}</Item.Extra> 
                        <Item.Extra><b>Strike Outs: </b>{this.state.modalLastYearContainer.so}</Item.Extra> 
                        <Item.Extra><b>Saves: </b>{this.state.modalLastYearContainer.sv}</Item.Extra> 
                        <Item.Extra><b>Record: </b>{this.state.modalLastYearContainer.w}-{this.state.modalLastYearContainer.l}</Item.Extra> 
                        <Item.Extra><b>Innings Pitched: </b>{this.state.modalLastYearContainer.ip}</Item.Extra> 
                        <Item.Extra><b>WHIP: </b>{this.state.modalLastYearContainer.whip}</Item.Extra> 
                        <Item.Extra><b>Walks: </b>{this.state.modalLastYearContainer.bb}</Item.Extra> 
                        <Item.Extra><b>ERA: </b>{this.state.modalLastYearContainer.era}</Item.Extra> 
                        <Item.Extra><b>Complete Games: </b>{this.state.modalLastYearContainer.cg}</Item.Extra> 
                        <Item.Extra><b>HRs Allowed: </b>{this.state.modalLastYearContainer.hr}</Item.Extra> 
                        <Item.Extra><b>Win %: </b>{this.state.modalLastYearContainer.wpct}</Item.Extra> 
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

export default PitcherCard;