import React from 'react';
import './App.css';
import { Card, Icon, Modal, Button, Item, Divider, Header } from 'semantic-ui-react'

class TeamCard extends React.Component {
    state={
        modalContainer: [], 
        modalClicked: false
    }

    teamIdClickHandler = () => {
        this.setState({
          modalClicked: true,
        })
    
        let team_id = this.props.obj.team_id;
        fetch(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=${team_id}`)
        .then(response=>response.json())
        .then(data => data !== [] ? (this.setState({modalContainer: data.roster_40.queryResults.row})) : null) 
      }

      render(){
        let playerArray;
        if (this.state.modalContainer !== []) {
            playerArray = this.state.modalContainer.map(p => {
                console.log(p)
            return (
              <Item.Group>
              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                    <Item.Header>{p.name_full}</Item.Header>
                    <Item.Extra>Position: {p.position_txt}</Item.Extra>
                    <Item.Extra>Bats: {p.bats}</Item.Extra>
                    <Item.Extra>Height: {p.height_feet}'{p.height_inches}"</Item.Extra>
                    <Item.Extra>Weight: {p.weight}</Item.Extra>
                </Item.Content>
              </Item>
              </Item.Group>
            )})
        };

    let webAddress = (`http://www.${this.props.obj.website_url}`)

    let colorTypeLeague;
    this.props.obj.league === "AL" ? colorTypeLeague = "red" : colorTypeLeague = "blue";

    return (
      <div className="TeamCard">
          <Card color={colorTypeLeague}>
             <Card.Content>
                <Card.Header href={webAddress} target="_blank" rel="noopener noreferrer">{this.props.obj.name_display_full}</Card.Header>
                
                <Card.Meta>
                    <span className='date'>Founded in {this.props.obj.first_year_of_play}</span>
                </Card.Meta>

                <Card.Description>
                <Icon name='home' />
                 {this.props.obj.venue_name}
                 </Card.Description>

                <Card.Description >
                    {this.props.obj.address_line1}
                </Card.Description>

                <Card.Description>
                {this.props.obj.address_city} {this.props.obj.address_state}
                </Card.Description>

             </Card.Content>
             <Card.Content extra onMouseEnter={()=>this.teamIdClickHandler()}>
                {this.state.modalClicked === false ?
                    <Button>View Roster</Button>
                    : null }

                {this.state.modalClicked ? 
                    <Modal trigger={<Button>View Roster</Button>} >
                    {this.state.modalContainer && this.state.modalClicked ? 
                        <Modal.Content>
                            <Header as="h1">{this.props.obj.name_display_full} Roster</Header>
                            <Divider/>
                            <Modal.Content>{playerArray}</Modal.Content> 
                        </Modal.Content>
                        : null }
                    </Modal> 
                    : null }

             </Card.Content>
          </Card> 
      </div>
    );
  }
}

export default TeamCard;