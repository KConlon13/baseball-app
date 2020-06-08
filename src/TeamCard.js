import React from 'react';
import './App.css';
import RosterModal from "./RosterModal";
import { Card, Icon, Modal, Button, Image, Header } from 'semantic-ui-react'

class TeamCard extends React.Component {
    // test 1
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
        console.log("HEY")
      }


    render(){
        let playerArray;
        if (this.state.modalContainer) {
            let playerArray = this.state.modalContainer.map(p => {
                console.log(p)
                return <h1>{p.name_full}</h1>
            })
        }

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
             <Card.Content extra onClick={()=>this.teamIdClickHandler()}>
                {/* {this.props.rosterArray !== [] ? console.log(this.props.rosterArray.queryResults.row) : null} */}
                 <Modal trigger={<Button>Hey</Button>} >
                     {this.state.modalContainer ? 
                    <Modal.Header>{playerArray}</Modal.Header>
                    : null
                     }
                     {/* <RosterModal rosterArray={this.props.rosterArray}/> */}
                 </Modal>


             </Card.Content>
          </Card> 
      </div>
    );
  }
}

export default TeamCard;