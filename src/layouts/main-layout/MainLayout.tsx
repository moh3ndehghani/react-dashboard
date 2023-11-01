import { Outlet } from "react-router-dom";
import Navbar from "layouts/main-layout/components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
