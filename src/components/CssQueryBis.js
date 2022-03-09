import React, {Component} from 'react';

class CssQueryBis extends Component {

    constructor(props) {
        super(props);
        this.state = {cssqueries: [], isLoading: true}
    }

    componentDidMount() {
        this.setState({isLoading: true});

        // fetch('http://localhost:8090/v2/cssquery/all')
        //     .then(response => response.json())
        //     .then(data => this.setState({cssqueries: data}));
    }

    render() {

        const {cssqueries} = this.state;

        return (
            <>
            <h1>Css query</h1>
            <div className="cssqueries">
                {cssqueries.map((cssquery) => (
                    <div className="cssquery">
                        <h3>{cssquery.topologyName}</h3>
                        {/*<h4>{cssquery.value}</h4>*/}
                    </div>
                ))}
            </div>
            </>
        );
        }
}

export default CssQueryBis;