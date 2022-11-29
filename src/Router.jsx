import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "@/pages/Form.jsx";
import FilePicker from "@/pages/FilePicker.jsx";
import Root from "@/pages/Root.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <FilePicker />,
  //   },
  //   {
  //     path: "/form",
  //     element: <Form />,
  //   },
  // ]);

  return <RouterProvider router={router} />;
};

export default Router;
