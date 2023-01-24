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