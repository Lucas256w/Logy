import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./pages/Post";
import App from "./App";
import Homepage from "./pages/Homepage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "post/:id", element: <Post /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
