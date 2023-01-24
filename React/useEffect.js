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
