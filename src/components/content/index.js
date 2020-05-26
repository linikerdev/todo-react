import React from 'react';
import './style.css'

function content(props) {
    return (
        <div className="content">
            {props.children}
        </div>
    )
}

export default content;

