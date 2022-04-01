import React, {Component} from 'react';
import StatusNav from "./StatusNav";
import {Button, Form, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

class StatusDelete extends Component {

    state = {
        tag: '',
        topologyName: '',
        isTopologyNameValid: false,
        isTagsValid: false,
        isFormValid: true,
        isShowModal: false,
        showErrors: false
    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})

        this.validateTags()
    }

    showModal = () => {
        this.setState({isShowModal: true})
    }

    hideModal = () => {
        this.setState({isShowModal: false})
    }

    validateTag = () => {
        if (this.state.tag.match("[a-zA-Z0-9]+")) {
            this.setState({isTagsValid: true})
        } else {
            this.setState({isTagsValid: false})
        }
    }

    deleteStatus = event => {
        event.preventDefault()

        const {serverUrl} = this.props
        const {topologyName, tag} = this.state

        let headers = new Headers()
        headers.append("Content-Type", "text/json");

        let requestParams = {
            method: 'DELETE',
            headers
        };

        if(tag === '') {

            fetch(`${serverUrl}status?topologyName=${topologyName}`, requestParams)
                .then((data) => {
                    console.log(data)
                })
                .then((data) => {
                    this.setState({output: data})
                })
                .catch(console.log)

        } else {
            fetch(`${serverUrl}status/byTag?topologyName=${topologyName}&tag=${tag}`, requestParams)
                .then((data) => {
                    console.log(data)
                })
                .then((data) => {
                    this.setState({output: data})
                })
                .catch(console.log)
        }

        console.log("Delete status")
        this.hideModal()
    }

    render() {
        const {tag, isTagsValid, isFormValid, isShowModal, isTopologyNameValid, topologyName, showErrors} = this.state

        return (
            <>
                <div>
                    <StatusNav/>
                    <Form style={{padding: "10%"}}>
                        <Form.Group className="mb-3">
                            <Form.Label>Topology name</Form.Label>
                            <Form.Control type="type" name='topologyName' placeholder="Enter topology name"
                                          onChange={this.handleChange} value={topologyName}/>
                            <Form.Text hidden={showErrors && isTopologyNameValid} className="text-muted">
                                Topology name must not be empty
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type="type" name='tags' placeholder="Enter tag" onChange={this.handleChange}
                                          value={tag}/>
                            <Form.Text hidden={showErrors && isTagsValid} className="text-muted">
                                Tags must not be empty
                            </Form.Text>
                        </Form.Group>
                        <Button type='button' disabled={!isFormValid}
                                className='btn btn-primary' onClick={this.showModal}>Delete status</Button>
                    </Form>
                </div>
                <Modal show={isShowModal} className="modal fade">
                    <ModalHeader>
                        <ModalTitle>Suppression des status</ModalTitle>
                        <Button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClick={this.hideModal}/>
                    </ModalHeader>
                    <ModalBody>
                        Attention: vous êtes sur le point de supprimer des données de crawl
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-primarysecondary" data-bs-dismiss="modal"
                                onClick={this.hideModal}>Annuler
                        </Button>
                        <Button type="button" className="btn btn-primary" onClick={this.deleteStatus}>Delete
                            status</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default StatusDelete;