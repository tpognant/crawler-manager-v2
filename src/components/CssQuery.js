import React, {Component} from 'react';
import Crawls from "./Crawls";

class CssQuery extends Component {

    state = {
        cssQuery: ''
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

