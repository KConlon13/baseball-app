import React from 'react';
import './App.css';
import { Tab, Feed, Icon } from 'semantic-ui-react'

// This component should have a navbar at the top to allow users to view 
// Injuries & Transactions

class Injuries extends React.Component {
    // state={
    // }



    render(){

        return(
            <div>
                <h3>Injuries</h3>
                <Feed>
                    <Feed.Event>
                        <Feed.Content>
                            <Feed.Summary>
                            <Feed.User>Elliot Fu</Feed.User> added you as a friend
                            <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>

                </Feed>
            </div>
        )
    }
}

export default Injuries;