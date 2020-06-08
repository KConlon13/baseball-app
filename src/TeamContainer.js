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
        let nationalArr = [];
        let americanArr = [];
        this.props.teamsArray.map(team => {
            if (team.league === "NL"){
                return nationalArr.push(team)
            } else {
                return americanArr.push(team)
            }
        });
        
        let allTeamsComponent = this.props.teamsArray.map(team => {
            return (
            <Grid.Column key={team.team_id}>
                <TeamCard obj={team} key={team.team_id} teamIdClickHandler={this.props.teamIdClickHandler} rosterArray={this.props.rosterArray}/>
            </Grid.Column>
            )
        });

        let nationalTeamsComponent = nationalArr !== [] ? nationalArr.map(team => {
            return (
            <Grid.Column key={team.team_id}>
                <TeamCard obj={team} key={team.team_id} teamIdClickHandler={this.props.teamIdClickHandler} rosterArray={this.props.rosterArray}/>
            </Grid.Column>
            )
        }) : null;

        let americanTeamsComponent = americanArr !== [] ? americanArr.map(team => {
            return (
            <Grid.Column key={team.team_id}>
                <TeamCard obj={team} key={team.team_id} teamIdClickHandler={this.props.teamIdClickHandler} rosterArray={this.props.rosterArray}/>
            </Grid.Column>
            )
        }) : null;

        
        return (
            <div className="TeamContainer">
            {/* {this.props.rosterArray !== [] ? console.log(this.props.rosterArray):null} */}
                <Button.Group className="button-group">
                    <Button onClick={()=>this.allTeamsClickHandler()}>MLB</Button>
                        <Button.Or />
                    <Button onClick={()=>this.nationalLeagueClickHandler()}>NL Only</Button>
                        <Button.Or />
                    <Button onClick={()=>this.americanLeagueClickHandler()}>AL Only</Button>
                </Button.Group>

                <Grid columns={3} divide>
                    <Grid.Row>
                        {this.state.buttonAL ? americanTeamsComponent : this.state.buttonNL ? nationalTeamsComponent : allTeamsComponent}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default TeamContainer;