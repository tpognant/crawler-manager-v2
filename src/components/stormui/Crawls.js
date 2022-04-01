import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Crawl from "./Crawl";

class Crawls extends Component {

    state = {
        crawls: []
    }

    componentDidMount() {
        fetch('http://10.130.194.20:8080/api/v1/topology/summary')
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
            <div>
                <h2>Crawls en cours</h2>
                <div className='cards'>
                    {this.state.crawls.map(crawl => (
                        <Crawl key={crawl} topologyName={crawl}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Crawls;