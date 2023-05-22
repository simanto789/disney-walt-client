import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SubCategoryDetails from "../Pages/Category/SubCategoryDetails";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import ToyUpdate from "../Pages/MyToys/ToyUpdate";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/AllToys/AllToys";
import ToysDetails from "../Pages/AllToys/ToysDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'details/:id',
        element: <SubCategoryDetails></SubCategoryDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: 'toysdetails/:id',
        element: <PrivateRoutes><ToysDetails></ToysDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: 'addToy',
        element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
      },
      {
        path: 'mytoys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: 'updatetoys/:id',
        element: <ToyUpdate></ToyUpdate>,
        loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
]);


export default router;