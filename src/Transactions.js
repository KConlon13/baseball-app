import React from 'react';
import './App.css';
import { Feed, Icon, Header } from 'semantic-ui-react'

class Transactions extends React.Component {
    state={
        transactionData: [],
    }

    componentDidMount(){
        let now = new Date();
        let nowDate = now.toLocaleDateString().split("/")
        if (nowDate[1].length === 1) {
            nowDate[1] = "0"+nowDate[1]
        } 
        if (nowDate[0].length === 1) {
            nowDate[0] = "0"+nowDate[0]
        }
        let currentDate = nowDate[2] + nowDate[0] + nowDate[1]
        // console.log(currentDate)

        // Use today's date as the end range of the fetch
        fetch(`https://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='20200701'&end_date=${currentDate}`)
        .then(resp=>resp.json())
        .then(data => (
            this.setState({transactionData: data.transaction_all.queryResults.row}), 
            console.log(this.state.transactionData)
        ))
    }

    render(){
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

export default Transactions;