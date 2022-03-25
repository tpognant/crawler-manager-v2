import React from 'react';
import './App.css';
import CssQuery from './components/CssQuery';
import EanToUrlGet from './components/EanToUrlGet';
import StatusAdd from './components/StatusAdd';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Connexion from "./components/Connexion";
import StatusDelete from "./components/StatusDelete";
import EanToUrlAdd from "./components/EanToUrlAdd";
import EanToUrlDelete from "./components/EanToUrlDelete";
import Content from "./components/Content";
import Home from "./components/Home";

function App() {

    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/statusadd">Status</Nav.Link>
                        <Nav.Link href="/cssquery">Css Query</Nav.Link>
                        <Nav.Link href="/eantourlget">Ean To Url</Nav.Link>
                        <Nav.Link href="/content">Content</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Connexion/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/eantourlget" element={<EanToUrlGet/>}/>
                <Route path="/eantourladd" element={<EanToUrlAdd/>}/>
                <Route path="/eantourldelete" element={<EanToUrlDelete/>}/>
                <Route path="/statusadd" element={<StatusAdd/>}/>
                <Route path="/statusdelete" element={<StatusDelete/>}/>
                <Route path="/content" element={<Content/>}/>
            </Routes>
        </Router>
    );
}

export default App;
