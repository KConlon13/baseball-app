import React from 'react';
import './App.css';
import { Feed, Icon, Header } from 'semantic-ui-react'

class Injuries extends React.Component {
    state={
        injuryData: [],
    }

    render(){
        const injuryList = this.props.newsData.reverse().map(item => {
            if (item.type === "Status Change") {
                return <Feed.Event>
                <Feed.Content>
                    <Feed.Summary>
                    <Feed.User>{item.note}</Feed.User>
                    <Feed.Date>{item.resolution_date.getDate}</Feed.Date>
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
            }
        })

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
                    {injuryList}
                </Feed>
            </div>
        )
    }
}

export default Injuries;