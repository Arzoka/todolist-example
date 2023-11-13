import React, { useState } from "react";
import "./styles/App/App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    if (inputValue === "") {
      alert("Input can't be empty!");
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length - 1,
        value: inputValue,
        checked: false,
      },
    ]);
  }

  function clearTodos() {
    if (window.confirm("Are you sure?")) {
      setTodos([]);
    }
  }

  function checkTodo(passedTodo) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === passedTodo.id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="flex flex-col h-screen justify-between items-center w-full gap-1 p-10 overflow-hidden">
      <div className="flex w-1/4 text-white">
        <div className="w-full flex flex-col">
          <h2 className="font-bold text-xl">To do</h2>
          <div className="flex flex-col gap-1 overflow-y-scroll scrollvert">
            {todos.map((todo, index) => (
                <div key={index} className="text-white flex gap-1 text-lg">
                  <input
                      onChange={() => checkTodo(todo)}
                      className="h-full aspect-square"
                      type="checkbox"
                      checked={todo.checked}
                  />
                  <p className={todo.checked ? "line-through" : ""}>{todo.value}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4 flex justify-center flex-col gap-4">
        <input
          placeholder="Write a todo..."
          className="w-full input"
          value={inputValue}
          onChange={(e) =>
            e.target !== null ? setInputValue(e.target.value) : null
          }
        />
        <div className="flex gap-1 w-full h-5 mb-10">
          <button className="button" onClick={() => clearTodos()}>
            Clear todos
          </button>
          <button className="button" onClick={() => addTodo()}>
            Add todo
          </button>
        </div>
      </div>
    </div>
  );
}
