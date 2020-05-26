import React from 'react';
import './style.css'

function header(props) {

    const isShowButton = () => (
        <div className={props.open ? 'closeAdd' : 'add'} onClick={props.toggleForm}>
            <i className={props.open ? 'fa fa-minus' : 'fa fa-plus'} aria-hidden="true"></i>
        </div>
    )


    return (
        <div className="header">
            <div className="title">Gerenciador de Tarefas</div>
            {isShowButton()}
        </div>
    )
}

export default header;
