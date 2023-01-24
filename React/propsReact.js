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
  