import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from "./App";
import Homepage from "./pages/Homepage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/post/:id", element: <Post /> },
        { path: "/log-in", element: <Login /> },
        { path: "/sign-up", element: <Signup /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
