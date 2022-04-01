import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class Crawl extends Component {

    render() {
        return (
            <Card style={{width: '10%'}}>
                <Card.Body>
                    <Card.Title>{this.props.topologyName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Crawl;