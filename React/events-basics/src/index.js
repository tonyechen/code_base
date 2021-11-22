import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    author: "Tony chen",
    title: "I Love Ramen to death",
    img: "https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen.jpg",
  },

  {
    id: 2,
    author: "Audrey Chen",
    title: "I Love Corgis to death",
    img: "https://iheartdogs.com/wp-content/uploads/2021/02/Cute_Corgi_face-e1613588692370.jpg",
  },

  {
    id: 3,
    author: "John Doe",
    title: "Some Title",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };

  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="submit" onClick={clickHandler}>
        reference example
      </button>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
