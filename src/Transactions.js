import React from 'react';
import './App.css';
import { Feed, Icon, Header, Button } from 'semantic-ui-react'

class Transactions extends React.Component {
    state={
        transactionData: [],
        itemsLimited: true,
        expanded: false,
    }

    showMore = () => {
        this.state.itemsLimited === true ? (
        this.setState({
            itemsLimited: false,
            expanded: true,
        })) : (
        this.setState({
            itemsLimited: true,
            expanded: false,
        }))
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
        let transactionList;
        if (this.state.expanded) {
            transactionList = this.props.newsData.reverse().map(item => {
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
        } else {
            transactionList = this.props.newsData.reverse().slice(0, 20).map(item => {
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
        }

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
                {this.state.expanded ? (
                    <Button animated='vertical' inverted color="purple" onClick={this.showMore}>
                    <Button.Content visible>Show less</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow circle up' />
                    </Button.Content>
                    </Button>
                ):(
                    <Button animated='vertical' inverted color="purple" onClick={this.showMore}>
                    <Button.Content visible>Show more</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow circle down' />
                    </Button.Content>
                    </Button>
                )}
            </div>
        )
    }
}

export default Transactions;

// Want to implement a feature where the START date for transactions and injuries is only 30-40 days back