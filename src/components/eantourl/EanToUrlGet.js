import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import EanToUrlNav from "./EanToUrlNav";

class EanToUrlGet extends Component {

    state = {
        topologyName: '',
        output: '',
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

    getEanToUrl = event => {

        event.preventDefault()

        const {serverUrl} = this.props
        const {topologyName} = this.state

        fetch(`${serverUrl}eantourl?topologyName=${topologyName}`)
            .then((data) => {
                console.log(data)
            })
            .then((data) => {
                this.setState({output: data})
            })
            .catch(console.log)
    }

    render() {

        const {topologyName, isTopologyNameValid, isFormValid, output} = this.state

        return (
            <>
                <EanToUrlNav />
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topology name"
                                      onChange={this.handleChange} value={topologyName} />
                    </Form.Group>
                    <Button onClick={this.getEanToUrl} type="submit">Get ean to url</Button>
                </Form>
                <textarea rows='10' name='output' value={output} onChange={this.handleChange}/>
            </>
        );
    }
}

export default EanToUrlGet