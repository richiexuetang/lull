import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.account) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};

export default AuthLayout;
