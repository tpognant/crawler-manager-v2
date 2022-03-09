import React, {Component} from 'react';

class CssQuery extends Component {

    render() {

        const cssQueries = {
            css1: {
                name: 'test1',
                value: 'test1'
            },
            css2: {
                name: 'test2',
                value: 'test1'
            }
        }

        let renderCssQuery =
            Object.keys(cssQueries)
                .map(css => (
                    <div key={css}>
                        <h2>{cssQueries[css].name}</h2>
                        <p>{cssQueries[css].value}</p>
                    </div>
                ))

        return (
            <div>
                {renderCssQuery}
            </div>
        )
    }
}

export default CssQuery

