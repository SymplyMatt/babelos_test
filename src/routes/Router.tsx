import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Personal from "../pages/auth/Personal";
import Auth from "../pages/auth/Auth";
import AuthContext from "../context/AuthContext";
import BankRegistration from "../pages/auth/BankRegistration";
import FingerPrint from "../pages/auth/FingerPrint";
import Farm from "../pages/auth/Farm";
import Login from "../pages/auth/Login";
import Verify from "../pages/auth/Verify";
import VerificationSuccess from "../pages/auth/VerificationSuccess";
import ApprovalPending from "../pages/auth/ApprovalPending";
import AddFarm from "../pages/auth/AddFarm";

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
        {
          path: "personal",
          element: <Personal />,
        },
        {
          path: "bank-registration",
          element: <BankRegistration />,
        },
        {
          path: "fingerprint",
          element: <FingerPrint />,
        },
        {
          path: "farm",
          element: <Farm />,
        },
        {
          path: "addfarm",
          element: <AddFarm />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "verify",
          element: <Verify />,
        },
        {
          path: "verification-success",
          element: <VerificationSuccess />,
        },
        {
          path: "approval-pending",
          element: <ApprovalPending />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...pageRoutes,...authRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
