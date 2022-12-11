import "./App.css";
import Home from "./component/Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./component/Pages/Blog/Blog";
import ProjectDetails from "./component/Pages/Home/ProjectDetails";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
    },
    {
      path: "project/:id",
      loader: ({ params }) => fetch(`project/${params.id}`),
      element: <ProjectDetails></ProjectDetails>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
