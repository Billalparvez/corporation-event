import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <p>loading...</p>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;