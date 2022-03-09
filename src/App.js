import React from 'react';
import './App.css';
import CssQuery from './components/CssQuery';
import EanToUrl from './components/EanToUrl';
import Status from './components/Status';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Connexion from "./components/Connexion";

function App() {

    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/status">Status</Nav.Link>
                        <Nav.Link href="/cssquery">Css Query</Nav.Link>
                        <Nav.Link href="/eantourl">Ean To Url</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Connexion/>}/>
                <Route path="/eantourl" element={<EanToUrl/>}/>
                <Route path="/cssquery" element={<CssQuery/>}/>
                <Route path="/status" element={<Status/>}/>
            </Routes>
        </Router>
    );
}

export default App;
