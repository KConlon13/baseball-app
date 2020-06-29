import React from 'react';
import './App.css';
import { Icon, Label, Input, Button, Modal, Header, Divider } from 'semantic-ui-react'

class PlayerCard extends React.Component {
    state={
        modalClicked: false,
    }


    // playerIdClickHandler = () => {
    //     this.setState({
    //         modalClicked: true,
    //       })
      
    //       let player_id = this.props.obj.player_id;
    //       fetch(`http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id=${player_id}`)
    //       .then(response=>response.json())
    //       .then(data => data !== [] ? (this.setState({modalContainer: data.roster_40.queryResults.row})) : null) 
    // }



    render(){
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
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerCard;