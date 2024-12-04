//layouts
import MainLayout from "./layouts/MainLayout";

//rrd imports
import {
  createBrowserRouter,
  Navigate,
  Router,
  RouterProvider,
} from "react-router-dom";

//pages
import { Home } from "./pages";

function App() {
  const user = true;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
