import React from 'react';

// import { Container } from './styles';

function content(props) {
    return (
        <div className="content">
            {props.children}
        </div>
    )
}

export default content;

