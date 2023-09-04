import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import Navbar from "./containers/Navbar";
import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";
import LoginComponent from "./components/login";
import {Col, Row} from "react-bootstrap";

const App = (props) => {

    const {auth: {isLoggedIn}} = props;

    return (
        !isLoggedIn ?
            <LoginComponent/>
            : (
                <BrowserRouter>
                    <Row style={{height: '100vh'}}>
                        <Col md={1} style={{backgroundColor: '#4d3b46', width: 70, padding: 0}}>
                            <Navbar/>
                        </Col>
                        <Col md={11}>
                            <Routes/>
                        </Col>
                    </Row>

                </BrowserRouter>
            )
    );
}
const mapStateToProps = state => {
    return {
        auth: state.authReducer
    }
}
export default connect(mapStateToProps)(App);

