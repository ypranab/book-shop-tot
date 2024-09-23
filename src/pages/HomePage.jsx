import { useState } from "react";
import { getAllBooks } from "../utils/book";
import { useEffect } from "react";
import Books from "../components/Books";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const getAllBookList = async () => {
    const data = await getAllBooks();
    setBooks(data);
  };
  useEffect(() => {
    getAllBookList();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => (
        <Books key={book.bookId} book={book}></Books>
      ))}
    </div>
  );
};

export default HomePage;
