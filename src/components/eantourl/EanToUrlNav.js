import React, {Component} from 'react';

class EanToUrlNav extends Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/eantourlget">Get ean to url</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/eantourladd">Add ean to url</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/eantourldelete">Delete ean to url</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default EanToUrlNav;