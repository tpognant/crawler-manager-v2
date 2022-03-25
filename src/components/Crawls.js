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
                <h1>Crawls en cours</h1>
                <ul className="list-group list-group-flush">
                    {this.state.crawls.map(crawl => (
                        <li key={crawl}  className="list-group-item">{crawl}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Crawls;