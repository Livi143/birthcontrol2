// listens for click to run algoritm 

import React, { Component } from "react";
import API from "../../utils/API";
class TempCollect extends Component {
    state = {
        temp: "",
        weight: "",
        sleep: "",
        spotting: "",
        hungover: null,
        bc: null,
        symptoms: "",
        loggedIn:"false",
        user:null
    }

    componentDidMount() {
        API.isLoggedIn().then(user => {
        if (user.data.loggedIn) {
            this.setState({
                loggedIn: true,
                user: user.data.user
            });
        }
    }).catch(err => {
        console.log(err);
    });}

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleButtonClick = event => {
        event.preventDefault();
       
        if(this.state.loggedIn){
            const log ={
                temp: Number(this.state.temp),
                weight: Number(this.state.weight),
                sleep: Number(this.state.sleep),
                spotting: Number(this.state.spotting),
                hungover: this.state.hungover,
                bc: this.state.bc,
                symptoms: this.state.symptoms,
                _userId:this.state.user._id
            }
    
    
            API.addLog(log)
        }
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Log your temperature and any symptoms or notes you have!!</h3>
                <br />
                <br />

                <form>
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputAmount">Temperature (in degrees)</label>
                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fas fa-temperature-low"></i></div>
                            <input
                                type="text"
                                name="temp"
                                class="form-control"
                                id="exampleInputAmount"
                                placeholder="Temperature"
                                onChange={this.handleInputChange}
                                value={this.state.temp}
                            ></input>
                            <div class="input-group-addon"> .00 </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div class="form-group">
                        <label class="sr-only" for="exampleInputAmount">Weight (in pounds)</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fas fa-weight"></i></div>
                            <input
                                type="text"
                                name="weight"
                                class="form-control"
                                id="exampleInputAmount"
                                placeholder="Weight"
                                onChange={this.handleInputChange}
                                value={this.state.weight}
                            ></input>


                            <div class="input-group-addon"> .00 </div>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div class="form-group">
                        <i class="fas fa-bed"></i> <label for="hoursSlept"> How many hours did you sleep last night?</label>
                        <select class="form-control" name="sleep" onChange={this.handleInputChange}
                            value={this.state.sleep} >
                            <option placeholder="0">0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    <br />
                    <div class="form-group">
                        <i class="fas fa-tint"></i> <label for="spotting"> If any, how would you rate your spotting?</label>
                        <select class="form-control" name="spotting" onChange={this.handleInputChange}
                            value={this.state.spotting} >
                            <option placeholder="5 is some serious spotting!">5 is some serious spotting!</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <br />
                    <i class="fas fa-cocktail"></i> <label for="hangover">Are you hungover?</label>
                    <div class="radio">
                        <label>
                            <input
                                type="radio"
                                name="hungover"
                                id="blankCheckbox"
                                value="true"
                                aria-label="..."
                                onChange={this.handleInputChange}
                                checked={this.state.hungover === "true"}
                            ></input> Yes
                         </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input
                                type="radio"
                                name="hungover"
                                id="blankCheckbox"
                                value="false"
                                aria-label="..."
                                onChange={this.handleInputChange}
                                checked={this.state.hungover === "false"}
                            ></input> No
                         </label>
                    </div>
                    <br />
                    <br />
                    <i class="fas fa-cocktail"></i> <label for="BC">Did You take Your Birth Control?</label>
                    <div class="radio">
                        <label>
                            <input
                                type="radio"
                                name="bc"
                                id="blankCheckbox"
                                value="true"
                                aria-label="..."
                                onChange={this.handleInputChange}
                                checked={this.state.bc === "true"}
                            ></input> Yes
                         </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input
                                type="radio"
                                name="bc"
                                id="blankCheckbox"
                                value="false"
                                aria-label="..."
                                onChange={this.handleInputChange}
                                checked={this.state.bc ==="false"}
                            ></input> No
                         </label>
                    </div>
                    <br />
                    <br />
                    <textarea class="form-control" name="symptoms" rows="3" placeholder="What symptoms are you experiencing?" onChange={this.handleInputChange}
                        value={this.state.symptoms} ></textarea>
                    <br />
                    <button type="submit" onClick={this.handleButtonClick} class="btn btn-primary">Log Entry</button>
                </form>

            </div>
        )
    }
}

export default TempCollect;
