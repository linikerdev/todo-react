import React, { useState } from 'react';
import Header from "../components/header";
import Content from "../components/content";
import FormInsert from "../components/form/insert";
import TodoItem from "../components/todo/item-todo";


const Todo = () => {

  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  )
  const [open, toggleOpen] = useState(false);


  const toggleForm = () => toggleOpen(!open)

  const addTodo = async (text) => {
    const newAdd = [...todos, { text, isDone: false }]
    pushStorage(newAdd)
  }
  const pushStorage = (data) => localStorage.setItem('todos', JSON.stringify(data));

  const removeTodo = index => {
    todos.splice(index, 1)
    setTodo([
      ...todos
    ])
  };

  const isShowForm = open ? (<FormInsert add={addTodo} />) : ""

  const mountTodos = () => {
    return todos.length === 0 ? (
      <div className="notask">Sem tarefas... :( </div>
    ) :
      (
        todos.map((todo, i) => (
          <TodoItem key={i} text={todo.text} done={todo.isDone} removeTodo={removeTodo} index={i} />
        ))
      )
  }


  return (
    <div id="todo">
      <Header open={open} toggleForm={toggleForm} />
      {isShowForm}
      <Content>
        {mountTodos()}
      </Content>
    </div>
  );
}

export default Todo;
