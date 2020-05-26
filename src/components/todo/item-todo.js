import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

// import { Container } from './styles';


const switchButton = (done) => {
    return done ? 'fa-times-circle' : 'fa-check-circle'
};

const checkClassItem = (done) => {
    return done ? 'done' : 'new';
}

const TodoItem = (props) => {
    return (
        <div className={`item ${checkClassItem(props.done)}`}>
            <div className="text">{props.text}</div>
            <div className="btn">
                <i className={`fa ${switchButton(props.done)}`} aria-hidden="true" />
            </div>
            <div className="btn" onClick={() => props.removeTodo(props.index)}>
                <i className="fa fa-trash" aria-hidden="true" />
            </div>
        </div >
    )
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
};

export default TodoItem;