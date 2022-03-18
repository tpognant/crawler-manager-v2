import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Crawls from "./Crawls";

const eanToUrl = {
    ean1: {
        topologyname: "amazon",
        searchtype: "ean",
        prefix: "http://amazon?ean=",
        suffix: ".html",
    },
    ean2: {
        topologyname: "darty",
        searchtype: "ean",
        prefix: "http://darty?ean=",
        suffix: ".php",
    }
}

class EanToUrl extends Component {

    render() {

        const renderEanToUrl =
            Object.keys(eanToUrl)
                .map(ean => (
                    <tr key={ean}>
                        <td>{eanToUrl[ean].topologyname}</td>
                        <td>{eanToUrl[ean].searchtype}</td>
                        <td>{eanToUrl[ean].prefix}</td>
                        <td>{eanToUrl[ean].suffix}</td>
                    </tr>
                ))

        return (
            <>
                <div style={{ padding:"10%" }}>
                    <Crawls/>
                    <br/>
                    <br/>
                    <Table striped bordered hover style={{padding: "10%"}}>
                        <thead>
                        <tr>
                            <th>Topology name</th>
                            <th>search type</th>
                            <th>Prefix</th>
                            <th>Suffix</th>
                        </tr>
                        </thead>
                        <tbody>
                        {renderEanToUrl}
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}

export default EanToUrl