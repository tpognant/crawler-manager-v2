import React, {Component} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import Crawls from "../stormui/Crawls";
import EanToUrlNav from "./EanToUrlNav";

class EanToUrlGet extends Component {

    state = {
        prefix: '',
        suffix: '',
        searchType: '',
        topologyName: ''
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})

        this.validateForm()
    }

    validateForm = () => {

    }

    addEanToUrl = event => {
        console.log("add ean to url")

        event.preventDefault()

        const {serverUrl} = this.props
        const {topologyName} = this.state

        let headers = new Headers()
        headers.append("Content-Type", "text/json");

        let body = new FormData()
        body.append("prefix", this.state.prefix)
        body.append("suffix", this.state.suffix)
        body.append("searchType", this.state.searchType)

        let requestParams = {
            method: 'POST',
            headers,
            body
        };

        fetch(`${serverUrl}eantourl?topologyName=${topologyName}`, requestParams)
            .then((data) => {
                console.log(data)
            })
            .then((data) => {
                this.setState({output: data})
            })
            .catch(console.log)
    }

    render() {

        const { prefix, suffix, searchType, topologyName } = this.state

        return (
            <>
                <EanToUrlNav/>
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Prefix</Form.Label>
                        <Form.Control type="type" name='prefix' placeholder="Enter prefix"
                                      onChange={this.handleChange} value={prefix}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topology name"
                                      onChange={this.handleChange} value={topologyName}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Suffix</Form.Label>
                        <Form.Control type="type" name='suffix' placeholder="Enter suffix"
                                      onChange={this.handleChange} value={suffix}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Search type</Form.Label>
                        <Form.Control name='inputs' placeholder="Enter searchType" onChange={this.handleChange}
                            value={searchType}/>
                    </Form.Group>
                    <Button onClick={this.addEanToUrl} type="submit">Add ean to url</Button>
                </Form>
            </>
        );
    }
}

export default EanToUrlGet