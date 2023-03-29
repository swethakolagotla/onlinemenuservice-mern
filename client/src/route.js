import React from "react"
import App from "./App";
import AddMenu from "./components/AddMenu";
import EditMenu from "./pages/EditMenu";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const Routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "menus",
    element: <Menu />,
  },
  {
    path: "addmenu",
    element: <AddMenu />,
  },
  {
    path: "editmenu/:id",
    element: <EditMenu />,
  },
];

export default Routes;