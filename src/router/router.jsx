import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import Common from "../layouts/Common";
import HomePage from "../pages/HomePage";
import SingleBookDetails from "../pages/SingleBookDetails";

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <Common></Common>,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <HomePage></HomePage>,
      },
      {
        path: `${ROUTES.SINGLE_BOOK.STATIC}`,
        element: <SingleBookDetails></SingleBookDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

export default router;
