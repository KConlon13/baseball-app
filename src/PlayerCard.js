import React from 'react';
import './App.css';
import { Icon, Label, Input, Button, Modal, Header, Divider, Card, Item } from 'semantic-ui-react'

class PlayerCard extends React.Component {
    state={
        modalClicked: false,
        modalContainer: [],
    }

    playerIdClickHandler = () => {
        this.setState({
            modalClicked: true,
        })
      
        let player_id = this.props.obj.player_id;
        fetch(`https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id='mlb'&game_type='R'&player_id=${player_id}`)
        .then(response=>response.json())
        .then(data => data !== [] ? 
            (this.setState({modalContainer: data.sport_career_hitting.queryResults.row})) 
            // console.log("yo", data.sport_career_hitting.queryResults.row)
            : 
            console.log("fuck")
        )
    }

    render(){
        console.log(this.state.modalContainer)
        let statArray;
        // if (this.state.modalContainer !== []) {
        //     statArray = this.state.modalContainer.map(s => {
        //         console.log(s)
        //     return (
        //       <Item.Group>
        //       <Item>
        //         <Item.Content>
        //             <Item.Header>{s.name_full}</Item.Header>
        //             <Item.Extra>Position: {s.position_txt}</Item.Extra>
        //             <Item.Extra>Bats: {s.bats}</Item.Extra>
        //             <Item.Extra>Height: {s.height_feet}'{s.height_inches}"</Item.Extra>
        //             <Item.Extra>Weight: {s.weight}</Item.Extra>
        //         </Item.Content>
        //       </Item>
        //       </Item.Group>
        //     )})
        // };

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
                            <Header as="h1">Stats Baby</Header>
                            <Divider/>
                            <Modal.Content>{statArray}</Modal.Content> 
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