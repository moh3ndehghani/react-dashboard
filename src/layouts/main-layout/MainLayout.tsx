import Navbar from "layouts/main-layout/components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Navbar>
      <div className="mt-10">
        <Outlet />
      </div>
    </Navbar>
  );
};

export default MainLayout;
