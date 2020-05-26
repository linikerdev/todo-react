import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

function Header(props) {

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

Header.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleForm: PropTypes.func,
};



export default Header;
