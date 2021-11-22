import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// a nameed export, we need to access using exactly the same name
import { books } from "./books.js";

// a defult export, the name can be whatever
import SpecificBook from "./Book.js";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
