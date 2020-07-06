import React from 'react';
import './App.css';
import { Feed, Icon, Header } from 'semantic-ui-react'

class Injuries extends React.Component {
    render(){
        return(
            <div>
                <Header as='h2' textAlign="center">
                    <div class="news-segment-headers">
                        <Icon name='user doctor' />
                        <Header.Content>
                        Injury Updates
                        </Header.Content>
                    </div>
                </Header>
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