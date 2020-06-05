import React from 'react';
import './App.css';
import RosterModal from "./RosterModal";
import { Card, Icon, Modal, Button, Image, Header } from 'semantic-ui-react'

class TeamCard extends React.Component {


    render(){
        // console.log(this.props.obj)
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
                <Card.Description >
                    {this.props.obj.address_line1}
                </Card.Description>
                <Card.Description>
                {this.props.obj.address_city} {this.props.obj.address_state}
                <Card.Description>
                <Icon name='home' />
                 {this.props.obj.venue_name}
                 </Card.Description>
                </Card.Description>
             </Card.Content>
             <Card.Content extra onClick={()=>this.props.teamIdClickHandler(this.props.obj)}>
                {/* {this.props.rosterArray !== [] ? console.log(this.props.rosterArray.queryResults.row) : null} */}
                <Button>View Roster</Button>
                 {/* <Modal trigger={<Button>View Roster</Button>}> */}
                    {/* <Modal.Header>{this.props.obj.name_display_full}</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Modal.Description>
                        <Header>40 Man Roster</Header>
                        <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll
                        </p>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                    </Modal.Actions> */}
                 {/* </Modal> */}

             </Card.Content>
          </Card> 
      </div>
    );
  }
}

export default TeamCard;