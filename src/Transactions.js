import React from 'react';
import './App.css';
import { Feed, Icon, Header } from 'semantic-ui-react'

class Transactions extends React.Component {
    state={
        transactionData: [],
    }

    
    dateSubtractor=(transDate)=>{
        let now = new Date()
        let itemDate = transDate.split("-")[0] + "-" + transDate.split("-")[1] + "-" + transDate.split("-")[2].slice(0,2)
        let newDate = new Date(itemDate)
        let distance = newDate - now;
        let days = Math.floor((distance / (1000 * 60 * 60 * 24)))+1;
        let result;
        if (Math.abs(days) === 0){
            result = "Today"
        } else if (Math.abs(days) === 1){
            result = "1 day ago";
        } else {
            result = Math.abs(days)+" days ago"
        }
        return result;
    }
    
    render(){
        const transactionList = this.props.newsData.reverse().map(item => {
            let finalDate = this.dateSubtractor(item.trans_date)
            if (item.type !== "Status Change") {
                return <Feed.Event>
                <Feed.Content>
                <Feed.Summary>
                    <Feed.User>{item.note}</Feed.User>
                    <Feed.Date>{finalDate}</Feed.Date>
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
            } else {
                return null;
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
            </div>
        )
    }
}

export default Transactions;

// Next BIG feature-- create something that limits the amount of news info on each side by only like 30 items at a time
// This will help keep the inital start date for the fetch as the beginning of spring training AND to keep the page fast & dynamic once the season starts