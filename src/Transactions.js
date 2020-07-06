import React from 'react';
import './App.css';
import { Feed, Icon, Header } from 'semantic-ui-react'

class Transactions extends React.Component {
    state={
        transactionData: [],
    }

    render(){
        const transactionList = this.props.newsData.reverse().map(item => {
            if (item.type !== "Status Change") {
                return <Feed.Event>
                <Feed.Content>
                    <Feed.Summary>
                    <Feed.User>{item.note}</Feed.User>
                    <Feed.Date>{item.resolution_date}</Feed.Date>
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
            }
        })

        return(
            <div>
                <Header as='h2' textAlign="center">
                    <div class="news-segment-headers">
                        <Icon name='exchange' />
                        <Header.Content>
                        Recent Transactions
                        </Header.Content>
                    </div>
                </Header>

                <Feed>
                    {transactionList}
                </Feed>
                {/* {transactionList} */}
            </div>
        )
    }
}

export default Transactions;