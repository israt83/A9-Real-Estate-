import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import "./index.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";


import Root from "./Root";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Details from "./Pages/Details/Details";
import Contact from "./Pages/Contact/Contact";
// import Blog from "./Pages/Blog/Blog";
import UpdateProfile from "./Pages/Login/UpdateProfile";



const url = "/hotels.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        
    
        loader: () => fetch(url).then(response => response.json()) 
      },
     
     
      {
        path: "/hotels/:id",
        element: <PrivateRoute>
          <Details />
        </PrivateRoute>,
        loader: async ({ params }) => fetch(url).then(response => response.json())
        
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <PrivateRoute><Contact /></PrivateRoute>,
      },
      // {
      //   path: "blog",
      //   element: <Blog></Blog>
      // },
      
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "updateProfile",
        element: <UpdateProfile/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
      

    </FirebaseProvider>
  </React.StrictMode>
);


