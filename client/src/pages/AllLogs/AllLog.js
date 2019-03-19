// listens for click to run algoritm 

import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";


class AllLogs extends Component {
    state = {
        user: null,
        logs: []
    }

    getLogs(id) {
        console.log("in.getLogs")
        API.getLogs(id).then(logs => {
            this.setState({logs:logs.data})
            
        }).catch(err => {
            console.log(err);
        });
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
            console.log("in.then", user)
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).then(()=>{
            console.log("second.then")
            this.getLogs(this.state.user._id)
        }).catch(err => {
            console.log(err);
        });
    }




    render() {
        console.log(this.state.logs)
        return (
            
            <div style={{ marginTop: 10 }}>
                
                {this.state.logs.length ? (
              <div>
                {this.state.logs.map(log => <Card key={log._id} keys={log._id} bc={log.bc} hungover={log.hungover} sleep={log.sleep} spotting={log.spotting} symptoms= {log.symptoms} temp={log.temp} weight= {log.weight} date ={log.date} /> )}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
        )
    }
}

export default AllLogs;
