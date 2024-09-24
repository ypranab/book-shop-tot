import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SingleBookDetails = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { book_id } = useParams();
  const location = useLocation();
  const { author } = location.state || {};

  useEffect(() => {
    fetch("/fakeDB.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const singleBook = allBooks.find((book) => book.bookId == book_id);
  console.log(singleBook);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-2/3">
      <figure className="w-1/2">
        <img src={`${singleBook?.image}`} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleBook?.bookName}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBookDetails;
