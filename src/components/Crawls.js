import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'

class Crawls extends Component {

    state = {
        crawls: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/v1/topology/summary')
            .then(res => res.json())
            .then((data) => {
                const topologies = []

                data.topologies.forEach(topology => {
                    topologies.push(topology.name)
                })

                return topologies
            })
            .then((data) => {
                this.setState({crawls: data})
            })
            .catch(console.log)

        console.log(this.state.crawls)
    }

    render() {
        return (
            <div className='crawls'>
                <Form.Select>
                    <option>Open this select menu</option>
                    {this.state.crawls.map(crawl => (
                        <option key={crawl} value={crawl}>{crawl}</option>
                    ))}
                </Form.Select>
            </div>
        );
    }
}

export default Crawls;