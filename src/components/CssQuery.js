import React, {Component} from 'react';
import Crawls from "./Crawls";

class CssQuery extends Component {

    state = {
        cssQuery: ''
    }

    componentDidMount() {
        fetch('http://localhost:8090/v2/cssquery?topologyName=amazon-blast')
            .then(res => res.json())
            .then(data => console.log(data))


            // .then((data) => {
            //     this.setState({crawls: data})
            // })
            // .catch(console.log)
    }


    render() {

        let renderCssQuery = (
                    <div>
                        <h2>{this.state.cssQuery.topologyName}</h2>
                        <textarea>{this.state.cssQuery.cssQuery}</textarea>
                    </div>
        )

        return (
            <div>
                {/*<Crawls/>*/}
                {renderCssQuery}
            </div>
        )
    }
}

export default CssQuery

