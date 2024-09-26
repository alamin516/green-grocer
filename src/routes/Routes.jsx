import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import About from "../pages/client/About/About";
import Home from "../pages/client/home/Home";
import NotFound from "../pages/client/NotFound/NotFound";
import Cart from "../pages/client/cart/Cart";
import Shop from "../pages/client/shop/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <PublicLayout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
