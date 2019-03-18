import React, {Component} from "react";
import "./Profile.scss";
import { Button } from "reactstrap";
import { Link } from "react-router-dom"
import API from "../../utils/API";
// import Flow from "./flowphoto.jpg";
import { Container, Row, Col } from "reactstrap";

class Profile extends Component {
    state = {
        loggedIn: false,
        user: null,
        loading: true
        // profileImage: ""
    }

    componentDidMount() {

        this.loading();

        API.isLoggedIn().then(user => {
            if (user.data.loggedIn) {
                this.setState({
                    loggedIn: true,
                    user: user.data.user
                });
            }
        }).catch(err => {
            console.log(err);
        });

        console.log(this.props)
    
        // this.newProfileImage()
    }

    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }

    // profileImage = () => {
    //     Flow.newProfileImage ()
    //     .then(res => this.setState({dogImage: res.data.message}))
    //     .catch (err => console.log(err))
    // }

    render() {
        return (
            <Container className="profilePage">
                {this.state.loggedIn ? (
                    <>
                    <Row className="profileBox">
                        
                        <h1 id="userTitle">Hello {this.state.user.username}!</h1>
                           
                    </Row>
                    <Row>
                    <p>Have you taken your pill today?</p>
                    </Row>
                     <Row className="profilePhoto" class="col-md-6" data-aos="fade-up">
                     <Col><img src= "https://www.connectioncafe.com/wp-content/uploads/2018/08/The-Flow-State.jpg" id="flow"width= "200" alt="image" class= "img-rounded" ></img></Col>

                     <Col>
                       <img src= "https://ugcorigin.s-microsoft.com/100/fb63105c-8aff-4ff7-ae87-a5f79f83ee4a/200/v3/image.jpg" id= "calendar" width= "200" alt="image" class="img-borded"></img>
                        </Col>

                    <Col className="undecided" id="undecidedNow">
                    <h1>TBD</h1>
                    </Col>
                    
                    </Row>

                    <Row>
                   <Col className="taken" id="reminder">
                   <h3>Last Taken Reminder</h3>
                   </Col> 

                   <Col className="appointment" id="schedule">
                   <h4>Want to see a Doctor?</h4>
                
                   <p>
                    <ul><a href= "https://www.plannedparenthood.org/health-center">Schedule an Appointment</a></ul>
                   </p>
                   </Col>

                   <Col className="informational" id="links">
                   <h4>Informational Links</h4>
                   <p>
                       <ul><a href= "https://www.plannedparenthood.org/">Planned Parenthood Main Page</a></ul>
                       <ul><a href= "https://www.womenshealth.gov/"> Office of Women's Health</a></ul>
                       <ul><a href= "https://www.globalfundforwomen.org/womens-human-rights/#.XJAXipNKh-U"> Global Fund for Women</a></ul>
                   </p>
                   </Col>
                   </Row>
                </>
                ):(
                    <div className="noUser">
                        {!this.state.loading ? (
                            <>
                                <h1>please log in</h1>
                                <Link className="loginLink" to="/login"><Button className="loginBtn" color="info" block>Login</Button></Link>
                            </>
                        ) : (
                            <img id="loadingIcon" src="./assets/images/loading.gif" alt="loading"/>
                        )}
                   </div> 
                   
                )}
            
        
       </Container>
    )}
}


export default Profile;