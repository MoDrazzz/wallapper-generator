import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Root from "@/pages/Root.jsx";
import Upload from "@/pages/Upload";
import Details from "@/pages/Details";
import Download from "@/pages/Download";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Navigate to="/upload" />,
        },
        {
          path: "/*",
          element: <Navigate to="/upload" />,
        },
        {
          path: "/upload",
          element: <Upload />,
        },
        {
          path: "/details",
          element: <Details />,
        },
        {
          path: "/download",
          element: <Download />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
