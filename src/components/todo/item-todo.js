import React from 'react';
import PropTypes from 'prop-types';
import './style.css'


const switchButton = (isDone) => {
    return isDone ? 'fa-times-circle' : 'fa-check-circle'
};

const checkClassItem = (isDone) => {
    return isDone ? 'done' : 'new';
}

const TodoItem = (props) => {
    const { index, text, status, update, remove } = props
    return (
        <div className={`item ${checkClassItem(status)}`}>
            <div className="text">
                {text}
                {status ? (
                    <span> <i className="fa fa-check" aria-hidden="true" /></span>
                ) : ""}
            </div>
            <div className="btn" onClick={() => update(index)}>
                <i className={`fa ${switchButton(status)}`} aria-hidden="true" />
            </div>
            <div className="btn" onClick={() => remove(index)}>
                <i className="fa fa-trash" aria-hidden="true" />
            </div>
        </div >
    )
}

TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    update: PropTypes.func,
    remove: PropTypes.func,
};

export default TodoItem;