import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Register";
import AddVolunteer from "../pages/AddVolunteer";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts";
import VolunteerDetails from "../components/VolunteerDetails";
import BeAVolunteer from "../components/BeAVolunteer";
import ManageMyPost from "../pages/ManageMyPost";
import UpdateVolunteer from "../components/UpdateVolunteer";
import MyVolunteerRequest from "../pages/MyVolunteerRequest";
import ErrorPage from "../pages/ErrorPage";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/add-volunteer',
                element: <PrivetRouter>
                    <AddVolunteer />
                </PrivetRouter>
            },
            {
                path: '/all-volunteer-need-posts',
                element: <AllVolunteerNeedPosts />
            },
            {
                path: '/details/:id',
                element: <PrivetRouter>
                    <VolunteerDetails />
                </PrivetRouter>
            },
            {
                path: '/be-a-volunteer/:id',
                element: <PrivetRouter>
                    <BeAVolunteer />
                </PrivetRouter>
            },
            {
                path: '/manage-my-post',
                element: <PrivetRouter>
                    <ManageMyPost />
                </PrivetRouter>
            },
            {
                path: '/update-volunteer/:id',
                element: <PrivetRouter>
                    <UpdateVolunteer />
                </PrivetRouter>
            },
            {
                path: '/my-volunteer-request',
                element: <PrivetRouter>
                    <MyVolunteerRequest />
                </PrivetRouter>
            }
        ]
    }
])

export default router;