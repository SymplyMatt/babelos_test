import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Personal from "../pages/auth/Personal";
import Auth from "../pages/auth/Auth";
import AuthContext from "../context/AuthContext";

const Routes = (): JSX.Element => {
  type routeProps = Array<{
    path: string;
    element: JSX.Element;
  }>;

  const pageRoutes: routeProps = [
    {
      path: "/",
      element: <Personal />,
    },
    {
      path: "*",
      element: <Personal />,
    },
  ];

  const authRoutes = [
    {
      path: "/auth",
      element: 
        <AuthContext>
          <Auth />
        </AuthContext>,
      children: [
        {
          path: "",
          element: <Personal />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
