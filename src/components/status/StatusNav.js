import React, {Component} from 'react';

class StatusNav extends Component {


    render() {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/statusadd">Add status</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/statusdelete">Delete status</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default StatusNav;