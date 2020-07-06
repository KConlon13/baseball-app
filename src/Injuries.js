import React from 'react';
import './App.css';
import { Feed, Icon, Header } from 'semantic-ui-react'

class Injuries extends React.Component {

    // componentDidMount(){
    //     fetch("http://mlb-data.p.rapidapi.com/fantasylookup/json/json/named.wsfb_news_injury.bam", {
	//     method: "GET",
	//     headers: {
	// 	"x-rapidapi-host": "mlb-data.p.rapidapi.com",
    //     "x-rapidapi-key": "a052480e81msh6a6d8cb3139b9a4p1d2f1fjsn7ce1e5d89cd9",
    //     }
    // })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }


    // The above fetch not working
    // Need to use a better API for live injury updates, original is not functioning

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