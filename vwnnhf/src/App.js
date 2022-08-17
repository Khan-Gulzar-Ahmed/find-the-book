import Reat, { useState } from "react";
import "./styles.css";

export default function App() {
  const myBooks = {
    javascript: [
      { name: "JavaScript The Good Parts", desc:"This book is good for learn",  rating: "4.2/5" },
      { name: "Eloquent JavaScript", desc:"This book is good for learn", rating: "4.1/5" }
    ],
    php: [
      { name: "Learning PHP, MySQL, and JavaScript", desc:"This book is good for learn", rating: "3.8/5" },
      { name: "PHP and MySQL Web Development", desc:"This book is good for learn", rating: "3.9/5" }
    ],
    css: [
      { name: "Responsive Web Design with HTML5 and CSS", desc:"This book is good for learn", rating: "4.5/5" },
      { name: "HTML & CSS: The Complete Reference", desc:"This book is good for learn", rating: "4.4/5" }
    ]
  };

  var [selectedBook, setbook] = useState("javascript");

  function clickHandler(type) {
    setbook(type);
  }
  useState(selectedBook);

  return (
    <div className="App">
      <h1>Find the Books</h1>
      <h2>Find the diffrent books based on rating !</h2>

      <div className="container">
        <h1>Click on Tab for books</h1>
        <h4>Checkout my favorite books. Select a genre to get books</h4>
        <br />
        <div>
          {Object.keys(myBooks).map((type) => (
            <button onClick={() => clickHandler(type)}>{type}</button>
          ))}
        </div>
        <br />
        <hr />

        <div>
          <ul>
            {myBooks[selectedBook].map((book) => (
              <li key={book.name}>
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                
                <div style={{ fontSize: "smaller" }}> {book.desc} </div>
                
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
