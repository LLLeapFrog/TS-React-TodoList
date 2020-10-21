import React, { useState } from 'react';
import { Todo } from './models/todo.model';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHanlder = (text: string) => {
    const newTodos = { id: Math.random().toString(), text: text };
    setTodos((prevTodos) => [...prevTodos, newTodos]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      <NewTodo onAddTodo={todoAddHanlder} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
