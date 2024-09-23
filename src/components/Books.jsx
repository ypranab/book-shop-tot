import { Link } from "react-router-dom";

const Books = ({ book }) => {
  return (
    <Link to={`/book/${book?.bookId}`}>
      <div className="cursor-pointer rounded-lg border shadow-xl border-red-800 px-4">
        <p>book: {book?.bookName}</p>
        <img className="h-40 w-64" src={`${book?.image}`} alt="" />
      </div>
    </Link>
  );
};

export default Books;
