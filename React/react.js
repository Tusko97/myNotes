// Imperative Programming:

//Explicitly describes the actions a program should take, each step of the way
//Describes how a program should go about doing those actions

//Declarative Programming:

//Describes what a program should accomplish (or what the end result should be)
//Leaves the determination of how to get to the end result up to the program


// React has a recommended tool, create-react-app Links to an external site., that makes it easy to create a new React project from scratch. The create-react-app tool sets up a preconfigured, default project, ready to launch with npm start. This package includes functionality built to be mobile friendly and progressive. That means apps will work on all modern browsers and mobile devices.

// Babel Links to an external site.: an included transpiler that converts modern JavaScript and custom code like JSX into more widely compatible JavaScript
// webpack Links to an external site.: a 'bundler' that takes all our work, along with any required dependency code, and packages it all up in a single, transferable bundle

// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.


//A function component looks like this:

function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}

// A class component looks like this:
class Comment extends React.Component {
  render() {
    return <div>Naturally, I agree with this article.</div>;
  }
}


//The minimum requirement for a React component is that it must be a function that starts with a capital letter and returns JSX.

// The following are valid components

function PlainDiv() {
  return <div>I am one line, so I do not need the parentheses</div>;
}

const Photo = () => {
  return (
    <figure>
      <img
        className="image"
        src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
      />
      <figcaption>Whoa</figcaption>
    </figure>
  );
};

const Table = () => (
  <table>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
    <tr>
      <th>312213</th>
      <th>Tim Berners-Lee</th>
    </tr>
  </table>
);

function ParentComponent() {
  return (
    <main>
      <PlainDiv />
      <Photo />
      <Table />
    </main>
  );
}

// Props

function ParentComponent() {
  // passing prop to ChildComponent
  return <ChildComponent text="Hello!" number={2} />;
}

function ChildComponent(props) {
  // using the values of the text and number props
  return (
    <div>
      {props.text} {props.number}
    </div>
  );
}


//Conclusion
//While HTML elements are the basic building blocks of a website, (for example, a <div>), a React application usually consists of several React components combined together. Unlike simple HTML elements, React components are smarter and bigger. They allow you to do much more and incorporate logic into how content displays.

//Components:

//are modular, reusable, and enable a 'templating' functionality
//help us organize our user interface's logic and presentation
//enable us to think about each piece in isolation, and apply structure to complex programs

//Props:

//are passed from a parent component to a child component
//can be accessed in the child components via an object that is passed into our component function
//can hold any kind of data (strings, numbers, booleans, objects, even functions!)
//Going forward we will expand on what we can do with components, how they fit into the larger React landscape, and what built-in functionality they come with.


// Props destructuring and default values

// parent component
function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      {/* passing down props from the parent component */}
      <MovieCard title={title} posterSrc={posterURL} genres={genresArr} />
    </div>
  );
}

// child component
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}


// Destructuring

function MovieCard({ title, posterSrc, genres }) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

// Without Destructuring
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}

// With Destructuring
function MovieCard({ title, posterSrc, genres }) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

//Lists and Keys
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((color) => {
    return <li style={{ color: color }}>{color}</li>;
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}


// Warning: Each child in a list should have a unique "key" prop.
// Check the render method of `ColorList`.
// To fix this error, we must give each <li> element a special key prop, like so:
const colorElements = colors.map((color) => {
  return (
    <li key={color} style={{ color: color }}>
      {color}
    </li>
  );
});


// if you have an array of objects, it's often best to use the object's id as the key:
const users = [
  { id: 1, firstName: "Duane", lastName: "Watson" },
  { id: 2, firstName: "Duane", lastName: "Johnson" },
];

const userHeadings = users.map((user) => {
  return <h1 key={user.id}>{user.firstName}</h1>;
});

// If you have an array of elements that aren't unique, and you can't use the id, you might be tempted to use the index position instead:
const fib = [0, 1, 1, 2, 3, 5];

const fibList = fib.map((number, index) => {
  return <div key={index}>{number}</div>;
});


// React fragment

function Bookshelf(props) {
  return (
    <section>
      {props.books.map((book) => (
        <React.Fragment key={book.id}>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
        </React.Fragment>
      ))}
    </section>
  );
}


// Conclusion
// Fragments are a small addition to React overall, but when used properly, can reduce a lot of unnecessary DOM bloat. They allow us a bit more flexibility in how we write our components, eliminating the need for wrapper elements.


// Handling count click
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  // a variable that changes! we want to use state.
  const [count, setCount] = useState(0)
  
  
  function handleCountClick() {
    setCount(count + 1)
    setCount(count + 1)
  }
  
  console.log("In component: ", count)
  
  return (
    <div>
      <button onClick={handleCountClick}>Clicks: {count}</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// Forms and controlled inputs
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// - React Forms: https://reactjs.org/docs/forms.html

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [accountType, setAccountType] = useState("pro");
  const [newsletter, setNewsletter] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { 
      username,
      password,
      avatar,
      accountType,
      newsletter
    }
    console.log(formData);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <img
        src={avatar}
        alt="Avatar preview"
      />

      <label htmlFor="type">Account Type</label>
      <select
        id="type"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      >
        <option value="free">Free</option>
        <option value="normal">Normal</option>
        <option value="pro">Pro</option>
      </select>

      <label>
        Get Our Newsletter!
        <input
          type="checkbox"
          id="newsletter"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
      </label>

      <input type="submit" value="Sign Up" />
    </form>
  );
}

ReactDOM.render(<SignUp />, document.getElementById('root'));


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

export default TodoList;



// React app static version
import React from 'react';
import ReactDOM from 'react-dom';

/*
Thinking in React: https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy

FilterableProductTable (orange)
  SearchBar (blue)
  ProductTable (green)
    ProductCategoryRow (turquoise)
    ProductRow (red)

Step 2: Build A Static Version in React


Step 3: Identify The Minimal (but complete) Representation Of UI State


Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow
*/

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td>{category}</td>
    </tr>
  )
}

function ProductRow({ price, stocked, name }) {
  return (
    <tr>
      <td style={{ color: stocked ? "black" : "red"}}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

function ProductTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow category="Sporting Goods" />
        <ProductRow name="Football" stocked={true} price={49.99} />
        <ProductRow name="Baseball" stocked={true} price={9.99} />
        <ProductRow name="Basketball" stocked={false} price={29.99} />
        <ProductCategoryRow category="Electronics" />
        <ProductRow name="iPod Touch" stocked={true} price={49.99} />
        <ProductRow name="iPhone 5" stocked={false} price={9.99} />
        <ProductRow name="Nexus 7" stocked={true} price={29.99} />
      </tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form style={{ padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable() {
  return (
    <div style={{ padding: "5px", border: "1px solid orange"}}>
      <SearchBar />
      <ProductTable />
    </div>
  )
}

function App() {
  return (
    <div>
      <FilterableProductTable />
      <img src="https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png" alt="Thinking in React" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

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

// Fetching Data using useEffect hook
function FoxImage() {
  const [image, setImage] = useState(null)
  
  useEffect(() => {
      fetch("https://randomfox.ca/floof/")
        .then(r => r.json())
        .then(data => setImage(data.image))
  }, [])
  if (!image) {
    return <h2>Loading...</h2>
}
}

//A very simple implementation of the App component with fetch might look like this:
import React, { useState, useEffect } from "react";

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        setPeopleInSpace(data.people);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  return <div>{peopleInSpace.map((person) => person.name)}</div>;
}

export default App;

// We can also add a loading indicator using this technique. Since our component will render once before useEffect runs our fetch request, we can set up another state variable to add a loading indicator, like this:
function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        setPeopleInSpace(data.people);
        setIsLoaded(true);
      });
  }, []);

  // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <h3>Loading...</h3>;

  return <div>{peopleInSpace.map((person) => person.name)}</div>;
}


// Fetching Data With Events
function handleClick() {
  fetch("your API url")
    .then((res) => res.json())
    .then((json) => setData(json));
}

return <button onClick={handleClick}>Click to Fetch!</button>;


// Using State with POST Requests
function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //since the id values are the same as the keys in formData, we can write an abstract setFormData here
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        id="password"
        value={formData.password}
        onChange={handleChange}
      />
    </form>
  );
}

// Routing

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

/*
Client Side Routing
- URLs
- REST - REpresentation State Transfer

npm install react-router-dom
https://reactrouter.com/web/guides/quick-start
*/

function App() {
    const [page, setPage] = useState("/")
    
    function getCurrentPage() {
        switch(page) {
            case "/":
                return <Home />
            case "/about":
                return <About />
            case "/projects":
                return <ProjectList />
            default:
                return <h1>404 not found</h1>
        }
    }
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route></Route>
            </Switch>
            {getCurrentPage()}
        </div>
    );
}

export default App;

// URL Parameters and adding links

import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ id, name, about, technologies }) {
  const technologiesList = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesList}</div>
      <Link to={`/projects/${id}`}>See more</Link>
    </div>
  );
}

export default ProjectItem;