import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dex from "../pages/Dex";
import Functionalities from "../pages/Functionalities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dex" replace /> },
      { path: "/dex", element: <Dex /> },
      { path: "/swap", element: <Dex /> },
      { path: "/amm", element: <Dex /> },
      { path: "/meme-pools", element: <Dex /> },
      { path: "/portfolio", element: <Dex /> },
      {
        path: "/functionalities",
        element: <Functionalities />,
      },
    ],
  },
]);
const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
