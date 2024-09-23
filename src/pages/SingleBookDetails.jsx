import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBookDetails = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { book_id } = useParams();

  useEffect(() => {
    fetch("/fakeDB.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const singleBook = allBooks.find((book) => book.bookId == book_id);

  return (
    <div>
      <h1>Book Details page: Name {singleBook?.bookName}</h1>
    </div>
  );
};

export default SingleBookDetails;
