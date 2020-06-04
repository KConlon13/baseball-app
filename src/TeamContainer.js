import React from 'react';
import './App.css';
import TeamCard from "./TeamCard"
import { Grid, Button } from 'semantic-ui-react'

class TeamContainer extends React.Component {
    state={
        buttonALL: true,
        buttonNL: false,
        buttonAL: false,
    }

    allTeamsClickHandler = () => {
        this.setState({
            buttonALL: true,
            buttonNL: false,
            buttonAL: false,
        })
    }
    nationalLeagueClickHandler = () => {
        this.setState({
            buttonALL: false,
            buttonNL: true,
            buttonAL: false,
        })
    }
    americanLeagueClickHandler = () => {
        this.setState({
            buttonALL: false,
            buttonNL: false,
            buttonAL: true,
        })
    }
    
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
                <Button.Group className="button-group">
                    <Button onClick={()=>this.allTeamsClickHandler()}>MLB</Button>
                        <Button.Or />
                    <Button onClick={()=>this.nationalLeagueClickHandler()}>NL Only</Button>
                        <Button.Or />
                    <Button onClick={()=>this.americanLeagueClickHandler()}>AL Only</Button>
                </Button.Group>

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