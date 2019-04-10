import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Boton";
import {Link} from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <div>
                <h1>Hello from model</h1>
            </div>
        );
    }
}

