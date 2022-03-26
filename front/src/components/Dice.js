import React from "react";
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import lanzando from '../resorurces/lanzando.jpg'
const Dice = () =>{

    return <Navbar bg="dark" variant="dar">
        <container>
        <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={lanzando}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Lanzamos !!
                </Navbar.Brand>
        </container>
    </Navbar>
}
export default Dice;