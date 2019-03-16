import React, { Component } from 'react';
import axios from "axios";


export default class Create extends Component {
    constructor(props) {
      super(props);
      this.onChangeTemperature = this.onChangeTemperature.bind(this);
      this.onChangeWeight = this.onChangeWeight.bind(this);
      this.onChangeHoursSlept = this.onChangeHoursSlept.bind(this);
      this.onChangeRateYourSpotting = this.onChangeRateYourSpotting.bind(this);
      this.onChangeAreYouHungover = this.onChangeAreYouHungover.bind(this);
      this.onChangeBirthControl = this.onChangeBirthControl.bind(this);
      this.onChangeSymptoms = this.onChangeSymptoms.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        temperature: '',
        weight: '',
        hours_slept: '',
        rate_your_spotting: '',
        are_you_hungover: '',
        symptoms: '',
      
      }
    }
  
    onChangeTemperature(e) {
      this.setState({
        temperature: e.target.value
      });
    }
  
    onChangeWeight(e) {
      this.setState({
        weight: e.target.value
      });
    }
  
    onChangeHoursSlept(e) {
      this.setState({
        hours_slept: e.target.value
      });
    }
  
    onChangeRateYourSpotting(e) {
      this.setState({
        rate_your_spotting: e.target.value
      });
    }
  
    onChangeAreYouHungover(e) {
      this.setState({
        are_you_hungover: e.target.value
      });
    }

    onChangeBirthControl(e) {
        this.setState({
          did_you_take_your_birthcontrol: e.target.value
        });
      }
  
    onChangeSymptoms(e) {
      this.setState({
        symptoms: e.target.value
      });
    }
  
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.temperature}, ${this.state.weight}, ${this.state.hours_slept}, ${this.state.rate_your_spotting}, ${this.state.are_you_hungover}, ${this.state.did_you_take_your_birthcontrol}, ${this.state.symptoms}`)
      this.setState({
        temperature: '',
        weight: '',
        hours_slept: '',
        rate_your_spotting: '',
        are_you_hungover: '',
        symptoms: '',
      })

      axios.post("/api/log/add", this.state).then(function(data) { console.log(data)})
    }

    


    render() {

        return (

            <div style={{marginTop: 10}}>
                <h3>Log your temperature and any symptoms or notes you have!!</h3>
                <br/>
                <br/>

                <form onSubmit={this.onSubmit} className="form-inline">
                    <div className="form-group">
                        <label className="sr-only" for="exampleInputAmount">Temperature </label>
                        <div className="input-group">
                        <div className="input-group-addon"><i className="fas fa-temperature-low"></i></div>
                        <input type="text" className="form-control" id="exampleInputAmount" onChange={this.onChangeTemperature} placeholder="Temperature"></input>
                        <div className="input-group-addon"> .00 </div>
                        </div>
                    </div>
          
                   <br/>
                   <br/>

                   
                    <div className="form-group">
                        <label className="sr-only" for="exampleInputAmount">Weight</label>
                        <div className="input-group">
                        <div className="input-group-addon"><i className="fas fa-weight"></i></div> 
                        <input type="text" className="form-control" id="exampleInputAmount" onChange={this.onChangeWeight} placeholder="Weight"></input>
                        <div className="input-group-addon"> .00 </div>
                        </div>
                    </div>
                    

                    <br/>
                    <br/>

                    
                    <div className="form-group">
                    <i className="fas fa-bed"></i> <label for="hoursSlept"> Hours Slept</label>          


                    <select onChange={this.onChangeHoursSlept} className="form-control">
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
                
                <br/>

                
                    <div className="form-group">
                    <i className="fas fa-tint"></i> <label for="spotting">Rate your spotting</label>          


                    <select onChange={this.onChangeRateYourSpotting} className="form-control">
                        <option placeholder="5 is some serious spotting!">5 is some serious spotting!</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    
                <br/>

                
                <i className="fas fa-cocktail"></i> <label for="hangover">Are you hungover</label>
                    <div className="checkbox">
                        <label>
                            <input onChange={this.onChangeAreYouHungover} type="checkbox" id="blankCheckbox" value="yes" aria-label="..."></input> Yes
                         </label>
                        </div>
                        <div className="checkbox">
                        <label>
                            <input onChange={this.onChangeAreYouHungover} type="checkbox" id="blankCheckbox" value="no" aria-label="..."></input> No
                         </label>
                        </div>
                

                    <br/>
                    <br/>

                    
                    <i className="fas fa-pills"></i> <label for="birthcontrol">Did you take your birth control?</label>
                    <div className="checkbox">
                        <label>
                            <input onChange={this.onChangeBirthControl} type="checkbox" id="blankCheckbox" value="yes" aria-label="..."></input> Yes
                         </label>
                        </div>
                        <div className="checkbox">
                        <label>
                            <input onChange={this.onChangeBirthControl} type="checkbox" id="blankCheckbox" value="no" aria-label="..."></input> No
                         </label>
                        </div>
                    

                    <br/>
                    <br/>

                   
                    <div>
                    <label>
                        <input onChange={this.onChangeSymptoms} for="symptoms" className="form-control" rows="3" placeholder="What symptoms are you experiencing?"></input> Symptoms
                        </label>
                    </div>
                    
                    <input onChange={this.onSubmit} type="submit" className="btn btn-primary" value="log entry"/>
                    </form>

                    
                   
                    
                    

                           
            </div>
            
        )
    }
}

