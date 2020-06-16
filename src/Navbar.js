import React from 'react';
import './App.css';
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class Navbar extends React.Component {



    render(){
        return(
            <div class="ui secondary menu">
                <Link to="/">
                    <a class="item">
                        Home
                    </a>
                </Link>
                <Link to="/players">
                    <a class="item">
                        Players
                    </a>
                </Link>
                <Link to="/scores">
                    <a class="item">
                        Scores
                    </a>
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