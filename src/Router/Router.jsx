import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Shard/Forms/Login";
import Register from "../pages/Shard/Forms/Register";
import Home from "../pages/Home/Home";

import CardDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRouter from "../Provider/PrivateRouter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Collection from "../pages/Home/Collection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/cardDetails/:id",
                element: <PrivateRouter> <CardDetails></CardDetails></PrivateRouter>,
                loader: () => fetch("/services.json")
            },
            {
                path: "/collection",
                element: <Collection></Collection>
            }

        ]
    },
]);
export default router