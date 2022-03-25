import React, {Component} from 'react';
import StatusNav from "./StatusNav";
import {Button, Form, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

class StatusDelete extends Component {

    state = {
        tags: '',
        isTagsValid: false,
        isFormValid: true,
        isShowModal: false
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

    validateTags = () => {
        if (this.state.tags.match("[a-zA-Z0-9,? ?]+")) {
            this.setState({isTagsValid: true})
        } else {
            this.setState({isTagsValid: false})
        }
    }

    deleteStatus = () => {
        console.log("Delete status")
        this.hideModal()
    }

    render() {
        const {tags, isTagsValid, isFormValid, isShowModal} = this.state

        return (
            <>
                <div>
                    <StatusNav/>
                    <Form style={{padding: "10%"}}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type="type" name='tags' placeholder="Enter tags" onChange={this.handleChange}
                                          value={tags}/>
                        </Form.Group>
                        <Button type='button' disabled={!isFormValid}
                                className='btn btn-primary' onClick={this.showModal}>Delete status</Button>
                    </Form>
                </div>
                <Modal show={isShowModal} className="modal fade">
                    <ModalHeader>
                        <ModalTitle>Suppression des status</ModalTitle>
                        <Button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClick={this.hideModal} />
                    </ModalHeader>
                    <ModalBody>
                        Attention: vous êtes sur le point de supprimer des données de crawl
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" className="btn btn-primarysecondary" data-bs-dismiss="modal" onClick={this.hideModal}>Annuler
                        </Button>
                        <Button type="button" className="btn btn-primary" onClick={this.deleteStatus}>Delete status</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default StatusDelete;