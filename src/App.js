import React, { Component } from "react";
import BookItems from "./BookItems";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchInput: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      if (this.state.searchInput !== "") {
        fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`
        )
          .then((blob) => blob.json())
          .then((response) => {
            this.setState({
              books: response.items,
            });
          });
      } else {
        this.setState({
          book: [],
        });
      }
    }
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      searchInput: value,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Book Finder</h1>
        <input
          placeholder="Search Book"
          value={this.state.searchInput}
          onChange={this.handleChange}
        />

        {this.state.books.map((book, i) => {
          return (
            <BookItems
              key={book.id}
              title={book.volumeInfo?.title}
              image={book.volumeInfo?.imageLinks?.thumbnail}
              authors={book.volumeInfo?.authors?.[0]}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
