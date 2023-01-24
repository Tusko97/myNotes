// state and CRUD Array 

import React, { useState } from "react";
import { myTodos, getNextId } from './todos'

/*
Rules of state: never mutate state directly!

Todo Deliverables:
- Add element to array: use spread operator!
- Remove element to array: use filter!
- Update element in array: use map!
*/

function TodoList() {
  const [todos, setTodos] = useState(myTodos);
  const [newTodoDescription, setNewTodoDescription] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: getNextId(),
      description: newTodoDescription,
      completed: false,
    };
    
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos);
  }
  
  function deleteTodo(id) {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
  }
  
  function updateTodo(id, completed) {
      console.log(todos)
      
      /*
- iterate over the elements in our todo array
- check if the ID matches
- if it does, return an updated todo obj
- otherwise, return the original todo
      */
      const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              return { ...todo, completed }
          } else {
             return todo 
          }
      })
      setTodos(updatedTodos)
      
  }
  
//   console.log(todos)
  
  return (
    <div className="App">
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label>
          Description:
          <input
            type="text"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Add todo" />
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              Completed?
              <input
                type="checkbox"
                onChange={(e) => updateTodo(todo.id, e.target.checked)}
                checked={todo.completed}
              />
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default TodoList;

// How to use state
import React, { useState } from 'react'

/* 
Deliverables
- Use the `useState` hook for the `image` and `likes` variables
- When the New Fox button is clicked, use the `handleNewFoxClick` function to fetch a random fox image. Use the image response from fetch to set the image variable.
- When the Like button is clicked, create an event handler that will increment the number of likes in state. Use the callback version of the state setter function to set the new number of likes.
*/

function App() {
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
  const [likes, setLikes] = useState(0)
  
  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        console.log(image)
      })
  }
  
  return (
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
          <button onClick={handleNewFoxClick}>New 🦊 Please</button>
          <button onClick={() => setLikes(likes + 1)}>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App
