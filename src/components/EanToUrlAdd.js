import React, {Component} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import Crawls from "./Crawls";
import EanToUrlNav from "./EanToUrlNav";

class EanToUrlGet extends Component {

    state = {
        prefix: '',
        suffix: '',
        topologyName: '',
        searchType: '',
        isPrefixValid: false,
        isSuffixValid: false,
        isTopologyNameValid: false,
        isSearchTypeValid: false,
        isFormValid: false
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})

        this.validateForm()
    }

    validateForm = () => {

    }

    addEanToUrl = () => {
        console.log("add ean to url")
    }

    render() {

        const {
            prefix, suffix, topologyName, searchType, isPrefixValid,
            isSuffixValid, isTopologyNameValid, isSearchTypeValid, isFormValid
        } = this.state

        return (
            <>
                <EanToUrlNav/>
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Prefix</Form.Label>
                        <Form.Control type="type" name='prefix' placeholder="Enter prefix"
                                      className={isPrefixValid ? 'is-valid' : 'is-invalid'} onChange={this.handleChange}
                                      value={prefix}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topology name"
                                      onChange={this.handleChange} value={topologyName}
                                      className={isTopologyNameValid ? 'is-valid' : 'is-invalid'}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Suffix</Form.Label>
                        <Form.Control type="type" name='suffix' placeholder="Enter suffix" onChange={this.handleChange}
                                      value={suffix} className={isSuffixValid ? 'is-valid' : 'is-invalid'}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Search type</Form.Label>
                        <Form.Control className={isSearchTypeValid ? 'is-valid form-control' : 'is-invalid form-control'}
                                  name='inputs' placeholder="Enter searchType" onChange={this.handleChange}
                                  value={searchType}/>
                    </Form.Group>
                    <Button onClick={this.addEanToUrl} disabled={!isFormValid} type="submit">Add ean to url</Button>
                </Form>
            </>
        );
    }
}

export default EanToUrlGet