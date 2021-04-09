import React, { useState } from 'react';
import TodoList from './components/todoList';
import NewTodo from './components/NewTodo';
import { Note } from './todo.model';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Note[]>([]);

  const addNote = (text: string) => {
    setTodos(st => [...st, { id: Math.random(), text: text }]);
    
  };
  const removeNote = (id: number) => {
    setTodos(st => st.filter(t => t.id !== id));
  };
  //console.log(todos);

  return (
    <div className="App">
      <NewTodo addNote={addNote}/>
      <TodoList items={todos} removeNote={removeNote}/>
    </div>
  );
}

export default App;
