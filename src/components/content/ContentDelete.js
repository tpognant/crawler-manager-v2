import React, {Component} from 'react';
import {Button, Form, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

class ContentDelete extends Component {

    state = {
        topologyName: '',
        tags: '',
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

    deleteContent = event => {
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

            fetch(`${serverUrl}content?topologyName=${topologyName}`, requestParams)
                .then((data) => {
                    console.log(data)
                })
                .then((data) => {
                    this.setState({output: data})
                })
                .catch(console.log)

        } else {
            fetch(`${serverUrl}content/byTag?topologyName=${topologyName}&tag=${tag}`, requestParams)
                .then((data) => {
                    console.log(data)
                })
                .then((data) => {
                    this.setState({output: data})
                })
                .catch(console.log)
        }

        console.log("delete content")
        this.hideModal()
    }

    render() {
        const {topologyName, isFormValid, isShowModal, tags} = this.state

        return (
            <div>
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topologyName" onChange={this.handleChange}
                                      value={topologyName}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="type" name='tags' placeholder="Enter tags" onChange={this.handleChange}
                                      value={tags}/>
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

export default ContentDelete;