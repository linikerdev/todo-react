import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

// import { Container } from './styles';


const switchButton = (status) => {
    return status ? 'fa-times-circle' : 'fa-check-circle'
};

const checkClassItem = (status) => {
    return status ? 'done' : 'new';
}

const TodoItem = (props) => {
    return (
        <div className={`item ${checkClassItem(props.status)}`}>
            <div className="text">Ir na cozinha</div>
            <div className="btn">
                <i className={`fa ${switchButton(props.status)}`} aria-hidden="true" />
            </div>
            <div className="btn">
                <i className="fa fa-trash" aria-hidden="true" />
            </div>
        </div >
    )
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
};

export default TodoItem;