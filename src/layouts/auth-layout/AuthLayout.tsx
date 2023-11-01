import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div>this is auth lyaout</div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
