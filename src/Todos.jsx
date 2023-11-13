import React from "react";
export function Todos({ todos, checkTodo }) {
  return (
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
  );
}
