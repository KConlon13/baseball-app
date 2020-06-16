import React from 'react';
import './App.css';
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    state={
        homeActive: true,
        playersActive: false,
        scoresActive: false,
    }


    homeItemHandler = () => {
        this.setState({
            homeActive: true,
            playersActive: false,
            scoresActive: false,
        })
    }
    playersItemHandler = () => {
        this.setState({
            homeActive: false,
            playersActive: true,
            scoresActive: false,
        })
    }
    scoresItemHandler = () => {
        this.setState({
            homeActive: false,
            playersActive: false,
            scoresActive: true,
        })
    }

    render(){

        return(
            <div class="ui secondary menu">
                <Link to="/">
                    {this.state.homeActive === true ? 
                    <a class="active item" onClick={() => this.homeItemHandler()}>
                        Home
                    </a> : 
                    <a class="item" onClick={() => this.homeItemHandler()}>
                    Home
                    </a> }
                </Link>
                <Link to="/players">
                    {this.state.playersActive === true ? 
                    <a class="active item" onClick={() => this.playersItemHandler()}>
                        Players
                    </a> : 
                    <a class="item" onClick={() => this.playersItemHandler()}>
                    Players
                    </a> }
                </Link>
                <Link to="/scores">
                    {this.state.scoresActive === true ? 
                    <a class="active item" onClick={() => this.scoresItemHandler()}>
                        Scores
                    </a> : 
                    <a class="item" onClick={() => this.scoresItemHandler()}>
                    Scores
                    </a> }
                </Link>

                <div class="right menu">
                    <Link>
                        <a class="ui item">
                        Logout
                        </a>
                    </Link>
                </div>
                <Divider/>
            </div>
        )
    }
}

export default Navbar;