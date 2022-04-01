import React from 'react';
import './App.css';
import CssQuery from './components/cssquery/CssQuery';
import EanToUrlGet from './components/eantourl/EanToUrlGet';
import StatusAdd from './components/status/StatusAdd';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Connexion from "./components/Connexion";
import StatusDelete from "./components/status/StatusDelete";
import EanToUrlAdd from "./components/eantourl/EanToUrlAdd";
import EanToUrlDelete from "./components/eantourl/EanToUrlDelete";
import ContentDelete from "./components/content/ContentDelete";
import Home from "./components/Home";
import properties from "./properties.json"

function App() {

    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/statusadd">Status</Nav.Link>
                        <Nav.Link href="/eantourlget">Ean To Url</Nav.Link>
                        <Nav.Link href="/content">Content</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Connexion/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/eantourlget" element={<EanToUrlGet serverUrl={properties.SERVER_URL}/>}/>
                <Route path="/eantourladd" element={<EanToUrlAdd serverUrl={properties.SERVER_URL}/>}/>
                <Route path="/eantourldelete" element={<EanToUrlDelete serverUrl={properties.SERVER_URL}/>}/>
                <Route path="/statusadd" element={<StatusAdd serverUrl={properties.SERVER_URL}/>}/>
                <Route path="/statusdelete" element={<StatusDelete serverUrl={properties.SERVER_URL}/>}/>
                <Route path="/content" element={<ContentDelete serverUrl={properties.SERVER_URL}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
