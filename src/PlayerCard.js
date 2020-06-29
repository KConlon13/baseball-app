import React from 'react';
import './App.css';
import { Icon, Label, Input, Button, Modal, Header, Divider, Card, Item } from 'semantic-ui-react'

class PlayerCard extends React.Component {
    state={
        modalClicked: false,
        modalContainer: [],
    }

    // componentDidUpdate(player_id){
    //     fetch(`https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id=${player_id}`)
    //     .then(response=>response.json())
    //     .then(data => 
    //         (this.setState({modalContainer: data.sport_career_hitting.queryResults.row})))
    // }

    playerIdClickHandler = () => {
        this.setState({
            modalClicked: true,
        })
      
        let player_id = this.props.obj.player_id;
        // this.componentDidUpdate(player_id)
        fetch(`https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id=${player_id}`)
        .then(response=>response.json())
        .then(data => 
            (this.setState({modalContainer: data.sport_career_hitting.queryResults.row})) 
        )
    }

    render(){
        let statContent;
        if (this.state.modalContainer) {
            statContent = 
            <Item.Group>
              <Item>
                <Item.Content>
                    <Item.Header>Career Stats</Item.Header>
                    <Item.Extra><b>Games Played: </b>{this.state.modalContainer.g}</Item.Extra>
                    <Item.Extra><b>At Bats: </b>{this.state.modalContainer.ab}</Item.Extra>
                    <Item.Extra><b>Runs: </b>{this.state.modalContainer.r}</Item.Extra>
                    <Item.Extra><b>Hits </b>{this.state.modalContainer.h}</Item.Extra>
                    <Item.Extra><b>Doubles: </b>{this.state.modalContainer.d}</Item.Extra>
                    <Item.Extra><b>Triples: </b>{this.state.modalContainer.t}</Item.Extra>
                    <Item.Extra><b>Home Runs: </b>{this.state.modalContainer.hr}</Item.Extra>
                    <Item.Extra><b>RBI: </b>{this.state.modalContainer.rbi}</Item.Extra>
                    <Item.Extra><b>Walks: </b>{this.state.modalContainer.bb}</Item.Extra>
                    <Item.Extra><b>Strike Outs: </b>{this.state.modalContainer.so}</Item.Extra>
                    <Item.Extra><b>Stolen Bases: </b>{this.state.modalContainer.sb}</Item.Extra>
                    <Item.Extra><b>AVG: </b>{this.state.modalContainer.avg}</Item.Extra>
                    <Item.Extra><b>OBP: </b>{this.state.modalContainer.obp}</Item.Extra>
                    <Item.Extra><b>SLG: </b>{this.state.modalContainer.slg}</Item.Extra>
                    <Item.Extra><b>OPS: </b>{this.state.modalContainer.ops}</Item.Extra>
                </Item.Content>
              </Item>
              </Item.Group>
            
        };

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
                    {this.state.modalContainer && this.state.modalClicked ? 
                        <Modal.Content>
                            <Header as="h1">{this.props.obj.name_display_first_last}</Header>
                            <div id="player-stat-modal-divider"><Divider/></div>
                            <Modal.Content>{statContent}</Modal.Content> 
                        </Modal.Content>
                        : null }
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