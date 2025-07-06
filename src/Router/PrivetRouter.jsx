import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading) return <LoadingSpinner/>
    if(user) return children
    return <Navigate to="/login" state={{from: location}}/>
};

export default PrivetRouter;