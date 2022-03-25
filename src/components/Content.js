import React, {Component} from 'react';
import {Button, Form, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

class Content extends Component {

    state = {
        topologyName: '',
        isTopologyNameValid: false,
        isFormValid: false,
        isShowModal: false
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})

        this.validateForm()
    }

    validateForm = () => {

    }

    showModal = () => {
        this.setState({isShowModal: true})
    }

    hideModal = () => {
        this.setState({isShowModal: false})
    }

    deleteContent = () => {
        console.log("delete content")
    }

    render() {
        const {topologyName, isFormValid, isShowModal} = this.state

        return (
            <div>
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topologyName" onChange={this.handleChange}
                                      value={topologyName}/>
                    </Form.Group>
                    <Button type='button' disabled={!isFormValid}
                            className='btn btn-primary' onClick={this.showModal}>Delete ean to url</Button>
                </Form>
                <Modal show={isShowModal} className="modal fade">
                    <ModalHeader>
                        <ModalTitle>Suppression des content</ModalTitle>
                        <Button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClick={this.hideModal} />
                    </ModalHeader>
                    <ModalBody>
                        Attention: vous êtes sur le point de supprimer des données de crawl
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-primarysecondary" data-bs-dismiss="modal" onClick={this.hideModal}>Annuler
                        </Button>
                        <Button type="button" className="btn btn-primary" onClick={this.deleteContent}>Delete content</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Content;