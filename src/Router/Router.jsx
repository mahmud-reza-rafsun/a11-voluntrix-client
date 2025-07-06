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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path: '/add-volunteer',
                element: <AddVolunteer/>
            },
            {
                path: '/all-volunteer-peed-posts',
                element: <AllVolunteerNeedPosts/>
            },
            {
                path :'/details/:id',
                element: <VolunteerDetails/>
            },
            {
                path: '/be-a-volunteer/:id',
                element: <BeAVolunteer/>
            },
            {
                path: '/manage-my-post',
                element: <ManageMyPost/>
            },
            {
                path: '/update-volunteer/:id',
                element: <UpdateVolunteer/>
            },
            {
                path: '/my-volunteer-request',
                element: <MyVolunteerRequest/>
            }
        ]
    }
])

export default router;