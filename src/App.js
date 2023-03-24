import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./components/RootLayout";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Contactus from "./components/contact-us/Contactus";

import UserList from "./components/userList/Userlist";
import User from "./components/user/User";

function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "contact-us",
          element: <Contactus />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "users-list",
          element: <UserList />,
        },
        {
          path: "user/:userObj",
          element: <User />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* return browser router obj */}
      <RouterProvider router={browserRouterObj} />
    </div>
  );
}

export default App;
