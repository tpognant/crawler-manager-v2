import React, {Component} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import Crawls from "./Crawls";
import EanToUrlNav from "./EanToUrlNav";

class EanToUrlGet extends Component {

    state = {
        topologyName: '',
        isTopologyNameValid: false,
        isFormValid: false
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})

        this.validateFields()
        this.validateForm()
    }

    validateFields = () => {

    }

    validateForm = () => {

    }

    getEanToUrl = () => {

    }

    render() {

        const {topologyName, isTopologyNameValid, isFormValid} = this.state

        return (
            <>
                <EanToUrlNav />
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topology name"
                                      onChange={this.handleChange} value={topologyName}
                                      className={isTopologyNameValid ? 'is-valid' : 'is-invalid'}/>
                    </Form.Group>
                    <Button onClick={this.getEanToUrl} disabled={!isFormValid} type="submit">Get ean to url</Button>
                </Form>
            </>
        );
    }
}

export default EanToUrlGet