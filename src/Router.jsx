import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Root from "@/pages/Root.jsx";
import ImageUpload from "@/pages/ImageUpload";

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
          element: <ImageUpload />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
