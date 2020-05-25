import React, { useState } from 'react';
import Header from "../components/header";
import Content from "../components/content";
import FormInsert from "../components/form/insert";
import TodoItem from "../components/todo/item-todo";

const InitialTodos = [
  { text: 'ir no supermecado', status: false },
  { text: 'Lavar o carro', status: true }
]

const Home = () => {

  const [todos] = useState(InitialTodos);

  const mountTodos = () => {
    return todos.lenght === 0 ? (
      <span>Sem resultados</span>
    ) :
      (
        todos.map((todo, i) => (
          <TodoItem key={i} text={todo.text} status={todo.status} />
        ))
      )
  }

  return (
    <div style={styles.todo}>
      <Header />
      <FormInsert />
      <Content>
        {mountTodos()}
      </Content>
    </div>
  );
}

export default Home;

const styles = {
  todo: {
    backgroundColor: "#fff",
    minWidth: "400px",
    width: "30%",
    padding: "8px",
    borderRadius: "5px",
  },
};
