import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UsersPage from "./UserList";
import UserDetails from "./UserDetails";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path:"", element: <HomePage/>},
            {path: "login", element: <LoginPage/>},
        ],
    },

    {
      element: <PrivateRoutes/>,
      children: [
            {
                path:"users", 
                element: <UsersPage/>,
                children: [
                    {
                        path:":id", 
                        element: <UserDetails/>,
                    },
                ],
            },
      ]
    }

]);

export default router;