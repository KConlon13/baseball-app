import React from 'react';
import './App.css';
import TeamCard from "./TeamCard"
import { Grid } from 'semantic-ui-react'

class TeamContainer extends React.Component {

    
    render(){
        let teamsComponent = this.props.teamsArray.map(rest => {
            return (
            <Grid.Column>
                <TeamCard obj={rest}/>
            </Grid.Column>
            )
        })

        return (
        <div className="TeamContainer">
            <Grid columns={3} divide>
                <Grid.Row>
            {teamsComponent}

                </Grid.Row>
            </Grid>
        </div>
        );
  }
}

export default TeamContainer;