import React, { useState } from "react";
import './style.css'


const Insert = (props) => {

    const [text, setText] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();
        props.add(text)
        return setText("")
    }

    // const reset = () => setText("")

    return (
        <div className="insert">
            <input min={5} type="text" placeholder="Insira a tarefa..." value={text} onChange={e => setText(e.target.value)} />
            <button disabled={!text} onClick={submitTodo}>ADD</button>
        </div>
    )
}

export default Insert;
