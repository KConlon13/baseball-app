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
            <div>
                <div class="ui secondary menu">
                    <Link to="/">
                        {this.state.homeActive === true ? 
                        <li className="active item" onClick={() => this.homeItemHandler()}>
                            Home
                        </li> : 
                        <li className="item" onClick={() => this.homeItemHandler()}>
                        Home
                        </li> }
                    </Link>
                    <Link to="/players">
                        {this.state.playersActive === true ? 
                        <li class="active item" onClick={() => this.playersItemHandler()}>
                            Players
                        </li> : 
                        <li class="item" onClick={() => this.playersItemHandler()}>
                        Players
                        </li> }
                    </Link>
                    <Link to="/scores">
                        {this.state.scoresActive === true ? 
                        <li class="active item" onClick={() => this.scoresItemHandler()}>
                            Scores
                        </li> : 
                        <li class="item" onClick={() => this.scoresItemHandler()}>
                        Scores
                        </li> }
                    </Link>

                    <div class="right menu">
                        {/* <Link> */}
                            <li class="ui item">
                            Logout
                            </li>
                        {/* </Link> */}
                    </div>
                </div>
                <div id="navbar-divider">
                    <Divider />
                </div>
            </div>
        )
    }
}

export default Navbar;