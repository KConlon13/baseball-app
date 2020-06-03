import React from 'react';
import './App.css';
import { Card } from 'semantic-ui-react'

class TeamCard extends React.Component {



  render(){
    console.log(this.props.obj)
    let webAddress = (`http://www.${this.props.obj.website_url}`)

    return (
      <div className="TeamCard">
          <a href={webAddress} target="_blank" rel="noopener noreferrer">
          <Card>
             <Card.Content>
                <Card.Header>{this.props.obj.name_display_full}</Card.Header>
                <Card.Meta>
                    <span className='date'>Founded in {this.props.obj.first_year_of_play}</span>
                </Card.Meta>
                <Card.Description>
                    {this.props.obj.address_line1}
                </Card.Description>
                <Card.Description>
                {this.props.obj.address_city} {this.props.obj.address_state}
                </Card.Description>
             </Card.Content>
          </Card>
          </a>
      </div>
    );
  }
}

export default TeamCard;