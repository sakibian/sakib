import React, { useState } from "react";
import "./style.css";

function generatedId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generatedId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  // 3:38:52sc
  return (
    <>
      <div className="container">
        <h1>Todos</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
          {todos.map(({ text, id }) => {
            return (
              <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
