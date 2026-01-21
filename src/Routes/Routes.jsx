import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Encrypt from '../pages/Encrypt';
import Decrypt from '../pages/Decrypt';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Encrypt />,
      },
      {
        path: "/decrypt",
        element: <Decrypt />,
      },
    ],
  },
]);