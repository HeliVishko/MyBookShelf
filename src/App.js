import logo from "./logo.svg";
import "./App.css";
import BookData from "./BookData";

function App() {
  const books = [{
    bookName: "פנרתה לוחמת",
    author: "חלי",
    publishYear: 1995
  }, {
    bookName: "אריה אגדי",
    author: "הדר",
    publishYear: 2003
  }
];

  return (
    <div className="App">
      {books.map((book) => {
        return <BookData bookName={book.bookName} author={book.author} publishYear={book.publishYear}></BookData>;
      })}
    </div>
  );
}

export default App;
