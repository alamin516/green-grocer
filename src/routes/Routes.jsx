import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import About from "../pages/client/About/About";
import Home from "../pages/client/Home/Home";
import NotFound from "../pages/client/NotFound/NotFound";
import Cart from "../pages/client/Cart/Cart";
import Shop from "../pages/client/Shop/Shop";
import Contact from "../pages/client/Contact/Contact";
import Blog from "../pages/client/Blog/Blog";
import ShippingAndReturn from "../pages/client/ShippingAndReturn/ShippingAndReturn";
import TermsAndConditions from "../pages/client/TermsAndConditions/TermsAndConditions";
import ReturnPolicy from "../pages/client/ReturnPolicy/ReturnPolicy";
import DeliveryInformation from "../pages/client/Profile/DeliveryInformation/DeliveryInformation";
import Support from "../pages/client/Support/Support";
import Login from "../pages/auth/SignIn/Login";
import CreateAccount from "../pages/auth/CreateAccount/CreateAccount";
import Wishlist from "../pages/client/Wishlist/Wishlist";
import Profile from "../pages/client/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "../pages/auth/ResetPassword/ResetPassword";
import ForgetPassword from "../pages/auth/ForgetPassword/ForgetPassword";
import UserLayout from "../layouts/UserLayout";
import AdminRoute from "./AdminRoute";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import AdminLogin from "../pages/auth/AdminSignIn/AdminLogin";
import AdminLayout from "../layouts/AdminLayout";
import Account from "../pages/client/Profile/Account/Account";
import Orders from "../pages/client/Profile/Orders/Orders";
import PersonalInformation from "../pages/client/Profile/PersonalInformation/PersonalInformation";
import AllUsers from "../pages/admin/Users/AllUsers";
import Products from "../pages/admin/Products/Products";
import ProductSingle from "../pages/client/Products/ProductSingle.jsx";
import CreateProduct from "../pages/admin/Products/CreateProduct.jsx";

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
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/login",
        element: <Login />,
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
      {
        path: "/product/:slug",
        element: <ProductSingle />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/checkout",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shipping-and-returns",
        element: <ShippingAndReturn />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndConditions />,
      },
      {
        path: "/return-privacy",
        element: <ReturnPolicy />,
      },
      {
        path: "/delivery-information",
        element: <DeliveryInformation />,
      },
      {
        path: "/support/",
        element: <Support />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/user/*",
    element: (
      <PrivateRoute>
        <UserLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "personal-info",
        element: <PersonalInformation />,
      },
      {
        path: "*", 
        element: <Navigate to="/user/profile" />,
      },
    ]
  },
  {
    path: "/admin/login",
    element: (
      <div className="flex flex-col justify-center items-center min-h-screen w-full lg:w-[66%] mx-auto px-[15px]">
        <AdminLogin />
      </div>
    ),
  },
  {
    path: "/admin/*",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path: "update-product:id",
        element: <CreateProduct />,
      },
      {
        path: "users",
        element: <AllUsers/>,
      },
      {
        path: "*", 
        element: <Navigate to="/admin/dashboard" />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
