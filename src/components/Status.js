import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";

class Status extends Component {

    state = {
        frequency: '',
        inputs: '',
        topologyName: ''
    }

    render() {

        const {frequency, inputs, topologyName} = this.state

        let nextFrequency = Date.now()

        return (
            <>
                <Form style={{ padding:"10%" }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control type="type" placeholder="Enter frequence" />
                        <Form.Text className="text-muted">
                            If you need to crawl only one time in 5 minute, use these frequency: {nextFrequency}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" placeholder="Enter topology name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Inputs</Form.Label>
                        <Form.Control type="type" placeholder="Enter inputs" />
                    </Form.Group>
                    <Button onClick={this.addStatus} type="submit" >Submit</Button>
                </Form>
            </>
        );
    }

    handleChangeFrequency = event => {
        const frequency = event.target.value
        this.setState({frequency})
    }

    handleChangeTopologyName = event => {
        const topologyName = event.target.value
        this.setState({topologyName})
    }

    addStatus() {
        console.log('Add status')
    }

    handleChangeInputs = event => {
        const inputs = event.target.value
        this.setState({inputs})
    }

}

export default Status