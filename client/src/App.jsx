import React from "react";
import { useRoutes } from "react-router-dom";
import UserHome from "./pages/UserHome";
import LogIn from "./pages/LogIn";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";

import CircularProgress from "@mui/joy/CircularProgress";

import { useAuth } from "../firebase/auth";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";

function App() {
  const { authUser, isLoading } = useAuth();

  let element = useRoutes([
    {
      path: "/",
      element: authUser ? <UserHome /> : <LogIn />,
    },
    {
      path: "/user",
      element: authUser ? <UserHome /> : <LogIn />,
    },
    {
      path: "/addcreator",
      element: authUser ? <AddCreator /> : <LogIn />,
    },
    {
      path: "/viewcreator/:id",
      element: authUser ? <ViewCreator /> : <LogIn />,
    },
    {
      path: "/editcreator/:id",
      element: authUser ? <EditCreator /> : <LogIn />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div>
      <NavBar />
      {isLoading ? <CircularProgress /> : element}
    </div>
  );
}

export default App;
