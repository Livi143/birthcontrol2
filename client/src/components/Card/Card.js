import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import styled from "styled-components"

const CardDiv = styled.div`
margin:5px;
`

const Cards = (props) => {
    console.log("cardprops", props);
    return (
        <CardDiv>
            <Card key={props.keys} >
                <CardBody>
                    <CardTitle>{props.date ? props.date : "no date"}</CardTitle>

                    <CardText>
                        This was your temperature: {props.temp} <br />
                        This was your weight: {props.weight} <br />
                        you got {props.sleep} hours of sleep <br />
                        You rated your spotting at a {props.spotting} <br />
                        {props.hungover ? "you were hungover" : "You were not hungover"} <br />
                        {props.bc ? "you took your birth control" : "you didn't take your birth control"} <br />
                        These were your symptoms: {props.symptoms} <br />


                    </CardText>

                </CardBody>
            </Card>
        </CardDiv>
    );
};

export default Cards;