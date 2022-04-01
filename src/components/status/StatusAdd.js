import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import StatusNav from "./StatusNav";
import {validateFrequency, validateInputs, validateTags, validateTopologyName} from "../Validation";

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
        showErrors: false
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})

        this.validateFields(name, value)
    }

    validateFields = (name, value) => {

        switch (name) {
            case 'frequency':
                this.setState({isFrequencyValid: validateFrequency(value)})
                break;
            case 'inputs':
                this.setState({isInputsValid: validateInputs(value)})
                break;
            case 'topologyName':
                this.setState({isTopologyNameValid: validateTopologyName(value)})
                break;
            case 'tags':
                this.setState({isTagsValid: validateTags(value)})
                break;
        }
    }

    addStatus = event => {
        event.preventDefault()

        const {isFrequencyValid, isTopologyNameValid, isTagsValid, isInputsValid} = this.state
        const isFormValid = isFrequencyValid && isTopologyNameValid && isTagsValid && isInputsValid

        console.log(isFormValid)

        if (isFormValid) {

            const {serverUrl} = this.props
            const {topologyName} = this.state

            let headers = new Headers()
            headers.append("Content-Type", "text/json");

            let body = new FormData()
            body.append("frequency", this.state.frequency)
            body.append("inputs", this.state.inputs)
            body.append("tags", this.state.tags)

            let requestParams = {
                method: 'POST',
                headers,
                body
            };

            fetch(`${serverUrl}status?topologyName=${topologyName}`, requestParams)
                .then((data) => {
                    console.log(data)
                })
                .then((data) => {
                    this.setState({output: data})
                })
                .catch(console.log)

            console.log('Add status')

            this.resetForm()
        } else {
            this.setState({showErrors: true})
        }
    }

    resetForm = () => {
        this.setState({
            frequency: '', inputs: '', topologyName: '', tags: '', isFrequencyValid: false,
            isTopologyNameValid: false, isTagsValid: false, isInputsValid: false, showErrors: false
        })
    }

    render() {

        const {
            frequency,
            inputs,
            topologyName,
            tags,
            isFrequencyValid,
            isTopologyNameValid,
            isTagsValid,
            isInputsValid,
            showErrors
        } = this.state

        const nextFrequency = ''//new Date()

        return (
            <>
                <StatusNav/>
                <Form style={{padding: "10%"}}>
                    <Form.Group className="mb-3">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control type="type" name='frequency' placeholder="Enter frequency"
                                      className={showErrors ? isFrequencyValid ? 'is-valid' : 'is-invalid' : ''}
                                      onChange={this.handleChange} value={frequency}/>
                        <Form.Text className="text-muted">
                            If you need to crawl only one time in 5 minute, use these frequency: {nextFrequency}
                        </Form.Text>
                        <br/>
                        <Form.Text hidden={showErrors && isFrequencyValid} className="text-muted">
                            Frequency must not be empty
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Topology name</Form.Label>
                        <Form.Control type="type" name='topologyName' placeholder="Enter topology name"
                                      onChange={this.handleChange} value={topologyName}
                                      className={showErrors ? isTopologyNameValid ? 'is-valid' : 'is-invalid' : ''}/>
                        <Form.Text hidden={showErrors && isTopologyNameValid} className="text-muted">
                            Topology name must not be empty
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="type" name='tags' placeholder="Enter tags" onChange={this.handleChange}
                                      value={tags}
                                      className={showErrors ? isTagsValid ? 'is-valid' : 'is-invalid' : ''}/>
                        <Form.Text hidden={showErrors && isTagsValid} className="text-muted">
                            Tags must not be empty
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Inputs</Form.Label>
                        <textarea
                            className={`form-control ${showErrors ? isInputsValid ? 'is-valid ' : 'is-invalid' : ''}`}
                            rows='10' name='inputs' placeholder="Enter inputs" onChange={this.handleChange}
                            value={inputs}/>
                        <Form.Text hidden={showErrors && !isTagsValid} className="text-muted">
                            Inputs must not be empty
                        </Form.Text>
                    </Form.Group>
                    <Button onClick={this.addStatus} type="submit">Add status</Button>
                </Form>
            </>
        );
    }

}

export default StatusAdd