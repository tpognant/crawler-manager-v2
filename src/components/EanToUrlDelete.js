import React, {Component} from 'react';
import {Button, Form, Table} from "react-bootstrap";
import Crawls from "./Crawls";
import EanToUrlNav from "./EanToUrlNav";

class EanToUrlGet extends Component {

    state = {
        topologyName: '',
        isFormValid: false,
        isTopologyNameValid: false,
        isShowModal: false
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})

        this.checkIsFormValid()
    }

    checkIsFormValid = () => {

    }

    showModal = () => {

    }

    render() {

        const { topologyName, isFormValid } = this.state

        return (
            <>
                <EanToUrlNav />
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topologyName" onChange={this.handleChange}
                                      value={topologyName}/>
                    </Form.Group>
                    <Button type='button' disabled={!isFormValid}
                            className='btn btn-primary' onClick={this.showModal}>Delete ean to url</Button>
                </Form>
            </>
        );
    }
}

export default EanToUrlGet