import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import StatusNav from "./StatusNav";

class StatusAdd extends Component {

    state = {
        frequency: '',
        inputs: '',
        topologyName: '',
        tags: '',
        isFrequencyValid: false,
        isTopologyNameValid: false,
        isTagsValid: false,
        isInputsValid: false,
        isFormValid: false
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})

        this.validateFields(name)
        this.validateForm()
    }

    validateFields = (name) => {

        switch (name) {
            case 'frequency':
                this.validateFrequency();
                break;
            case 'inputs':
                this.validateInputs();
                break;
            case 'topologyName':
                this.validateTopologyName();
                break;
            case 'tags':
                this.validateTags();
                break;
        }
    }

    validateFrequency = () => {
        if(this.state.frequency === '') {
            this.setState({isFrequencyValid: false})
        } else {
            this.setState({isFrequencyValid: true})
        }
    }

    validateInputs = () => {
        if(this.state.inputs === '') {
            this.setState({isInputsValid: false})
        } else {
            this.setState({isInputsValid: true})
        }
    }

    validateTopologyName = () => {
        if(this.state.topologyName.match("[a-zA-Z-]+")) {
            this.setState({isTopologyNameValid: true})
        } else {
            this.setState({isTopologyNameValid: false})
        }
    }

    validateTags = () => {
        if(this.state.tags.match("[a-zA-Z0-9,? ?]+")) {
            this.setState({isTagsValid: true})
        } else {
            this.setState({isTagsValid: false})
        }
    }

    validateForm = () => {
        const {isFrequencyValid, isTopologyNameValid, isTagsValid, isInputsValid} = this.state
        const isFormValid = isFrequencyValid && isTopologyNameValid && isTagsValid && isInputsValid

        this.setState({isFormValid})
    }

    addStatus() {
        console.log('Add status')
    }

    render() {

        const {frequency, inputs, topologyName, tags, isFrequencyValid, isTopologyNameValid, isTagsValid, isInputsValid} = this.state

        const nextFrequency = ''//new Date()

        return (
            <>
                <StatusNav />
                <Form style={{ padding:"10%" }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control type="type" name='frequency' placeholder="Enter frequency" className={isFrequencyValid ? 'is-valid' : 'is-invalid'} onChange={this.handleChange} value={frequency} />
                        <Form.Text className="text-muted">
                            If you need to crawl only one time in 5 minute, use these frequency: {nextFrequency}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topology name" onChange={this.handleChange} value={topologyName} className={isTopologyNameValid ? 'is-valid' : 'is-invalid'} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="type" name='tags'placeholder="Enter tags" onChange={this.handleChange} value={tags} className={isTagsValid ? 'is-valid' : 'is-invalid'} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Inputs</Form.Label>
                        <textarea className={isInputsValid ? 'is-valid form-control' : 'is-invalid form-control'} rows='10' name='inputs' placeholder="Enter inputs" onChange={this.handleChange} value={inputs} />
                    </Form.Group>
                    <Button onClick={this.addStatus} disabled={!this.state.isFormValid} type="submit" >Add status</Button>
                </Form>
            </>
        );
    }

}

export default StatusAdd