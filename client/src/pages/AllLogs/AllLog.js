// // listens for click to run algoritm 

// import React, { Component } from "react";
// import API from "../../utils/API";
// import Card from "../../components/Card";


// class AllLogs extends Component {
//     state = {
//         user: null,
//         logs: [],
//         todaysTemp: "",
//         yesterdaysTemp: ""
//         // timeSinceLastCycle: 
//     }

//     getLogs(id) {
//         console.log("in.getLogs")
//         API.getLogs(id).then(logs => {
//             this.setState({logs:logs.data, todaysTemp:logs.data[logs.data.length].temp, yesterdaysTemp:logs.data[logs.data.length-1].temp})
            
//         }).catch(err => {
//             console.log(err);
//         });
//     }

//     componentDidMount() {
//         API.isLoggedIn().then(user => {
//             console.log("in.then", user)
//             if (user.data.loggedIn) {
//                 this.setState({
//                     loggedIn: true,
//                     user: user.data.user
//                 });
//             }
//         }).then(()=>{
//             console.log("second.then")
//             this.getLogs(this.state.user._id)
//             essentialAlgorithm(this.state.todaysTemp, this.state.yesterdaysTemp)
//         }).catch(err => {
//             console.log(err);
//         });
//     }




// essentialAlgorithm = (todaysTemp, yesterdaysTemp) =>{
//      dif = todaysTemp - yesterdaysTemp;
//     if ((dif)>=.05) {
//         console.log("careful! You are potentially fertile now and can be for the next five days. If you have had unprotected sex within the last five days you run the risk of becoming pregnant.");
        
//     } else if (((dif)!>=.05) && timeSinceLastCycle >= 9) {
//         console.log("you are not currently fertile but you are due to become so within the next few days. Play it safe!");
//     } else {
//         console.log("you are not currently fertile, enjoy aunt Flow");
//     }
// }

//     render() {
//         console.log(this.state.logs)
//         return (
            
//             <div style={{ marginTop: 10 }}>
                
//                 {this.state.logs.length ? (
//               <div>
//                 {this.state.logs.map(log => <Card key={log._id} keys={log._id} bc={log.bc} hungover={log.hungover} sleep={log.sleep} spotting={log.spotting} symptoms= {log.symptoms} temp={log.temp} weight= {log.weight} date ={log.date} /> )}
//               </div>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//             </div>
//         )
//     }
// }

// export default AllLogs;


====================
// listens for click to run algoritm 

import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";


class AllLogs extends Component {
    state = {
        user: null,
        logs: [],
        todaysTemp: "",
        yesterdaysTemp: "",
        fertile: "maybe"
    }

    getLogs(id) {
        console.log("in.getLogs")
        API.getLogs(id).then(logs => {
            this.setState({logs:logs.data, todaysTemp:logs.data[logs.data.length].temp, yesterdaysTemp:logs.data[logs.data.length-1].temp})
            
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
            this.essentialAlgorithm(this.state.todaysTemp, this.state.yesterdaysTemp)
        }).catch(err => {
            console.log(err);
        });
    }




essentialAlgorithm (todaysTemp, yesterdaysTemp){
     var dif = todaysTemp - yesterdaysTemp;
    if ((dif)>=.05) {
        this.setState({ fertile: "yes"})
        console.log("careful! You are potentially fertile now and can be for the next five days. If you have had unprotected sex within the last five days you run the risk of becoming pregnant.");
        
    } else if (((dif)<=.05)) {
        this.setState({fertile: "maybe"})
        console.log("you are not currently fertile but you are due to become so within the next few days. Play it safe!");
    } else {
        this.setState({ fetile: "no"})
        console.log("you are not currently fertile, enjoy aunt Flow");
    }
}

    render() {
        console.log(this.state.logs)
        return (
            
            <div style={{ marginTop: 10 }}>
                <div>
                      <h3>Fertility Report:</h3>
                    {this.state.fertile === "yes" ? (
                        <div>careful! You are potentially fertile now and can be for the next five days. If you have had unprotected sex within the last five days you run the risk of becoming pregnant</div> )
                        : (this.state.fertile === "maybe") ? (
                        <div>you are not currently fertile but you are due to become so within the next few days. Play it safe!</div>
                        ) : (
                            <div>you are not currently fertile, enjoy aunt Flow</div>
                        )
                        }
                </div>
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