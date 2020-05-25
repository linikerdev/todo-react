import React from 'react';
import './style.css'
// import { Container } from './styles';

function header() {
    return (
        <div className="header">
            <div className="title">Gerenciador de Tarefas</div>
            <div className="add">
                <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default header;
