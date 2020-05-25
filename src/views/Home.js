import React from 'react';
// import React, { useState } from 'react';
import Header from "../components/header";
import Content from "../components/content";
import FormInsert from "../components/form/insert";
import TodoItem from "../components/todo/item-todo";


const Home = () => (
  // const [todos, setTodo] = useState(0);

  <div style={styles.todo}>
    <Header />
    <FormInsert />
    <Content>
      <TodoItem key={1} text="Ir na Cozinha" status={false} />
      <TodoItem key={3} text="Ir no mercado" status={false} />
      <TodoItem key={2} text="Ir na Cozinha2" status={true} />
    </Content>
  </div>
);

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
