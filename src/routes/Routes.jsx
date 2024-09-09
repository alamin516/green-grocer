import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import About from "../pages/client/About/About";
import Home from "../pages/client/home/Home";

export const router = createBrowserRouter([{
    path: "/",
    element: <PublicLayout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path:'/about',
            element:<About/>
        }
    ]
}]);
