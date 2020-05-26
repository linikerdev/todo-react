import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import Content from "../components/content";
import FormInsert from "../components/form/insert";
import TodoItem from "../components/todo/item-todo";
const keyStorage = 'storageTodo'

const Todo = () => {

  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem(keyStorage)) || [])
  const [open, toggleOpen] = useState(false);


  useEffect(() => {
    document.title = "Todo Manager"
    pushStorage(todos)
  }, [todos]);


  const toggleForm = () => toggleOpen(!open)

  const pushStorage = (data) => localStorage.setItem(keyStorage, JSON.stringify(data));


  const addTodo = async (text) => {
    const newTodos = sortTodos([...todos, { text, isDone: false }])
    setTodo(newTodos)
  }

  const removeTodo = index => {
    todos.splice(index, 1)
    setTodo([
      ...todos
    ])
  };

  const updateTodo = (index) => {
    todos[index].isDone = !todos[index].isDone
    const newTodos = sortTodos(todos)
    setTodo([
      ...newTodos
    ])
  };

  const sortTodos = (todos) => todos.sort((a, b) => a.isDone ? 1 : -1)

  const showTodos = () => {
    return todos.length === 0 ? (
      <div className="notask">Sem tarefas... :( </div>
    ) :
      (
        todos.map((todo, i) => (
          <TodoItem key={i} text={todo.text}
            status={todo.isDone}
            remove={removeTodo}
            update={updateTodo}
            index={i} />
        ))
      )
  }

  const isShowForm = open ? (<FormInsert add={addTodo} />) : ""


  return (
    <div id="todo">
      <Header open={open} toggleForm={toggleForm} />
      {isShowForm}
      <Content>
        {showTodos()}
      </Content>
    </div>
  );
}

export default Todo;
