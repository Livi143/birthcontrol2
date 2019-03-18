import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const Cards = (props) => {
    return (
        <div>
            <Card key={props.keys} >
                <CardBody>
                    <CardTitle>{props.date ? props.date: "no date"}</CardTitle>

                    <CardText>
                        {props.bc ? "you took your birth control": "you didn't take your birth control"} <br />
                        {props.hungover ? "you were hungover": "You were not hungover"} <br />
                        you got {props.sleep} hours of sleep <br />
                        You rated your spotting at a {props.spotting} <br />
                        These were your symptoms: {props.symptoms} <br />
                        This was your temperature: {props.temp} <br />
                        This was your weight: {props.weight} <br />
                    </CardText>

                </CardBody>
            </Card>
        </div>
    );
};

export default Cards;