import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopDrawer from "layouts/main-layout/components/navbar/components/DesktopDrawer";
import MobileDrawer from "layouts/main-layout/components/navbar/components/MobileDrawer";
import {
  InsertChartTwoTone,
  KeyboardDoubleArrowRightTwoTone,
  HomeTwoTone,
  PersonTwoTone,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import MenuModel from "models/global/MenuModel";

const routes: MenuModel[] = [
  {
    title: "Main Dashboard",
    path: "/",
    icon: <HomeTwoTone />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <PersonTwoTone />,
  },
];

const Drawer = () => {
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<MenuModel>();
  const checkDesktop = useMediaQuery("(min-width:1024px)");

  const activeRoute = (routeName:string):boolean => {
    return location.pathname.includes(routeName);
  };

  return (
    <>
      {checkDesktop ? (
        <DesktopDrawer open={open} setOpen={setOpen}>
          <div className="flex flex-col gap-5">
            <div className="h-[70px] bg-gray-50 flex items-center justify-between p-4 relative">
              {open && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full p-5 bg-gray-200">
                    <InsertChartTwoTone className="text-[var(--green-7)]" />
                  </div>
                  <span className="font-bold text-xl">Dashboard</span>
                </div>
              )}
              <KeyboardDoubleArrowRightTwoTone
                className={`cursor-pointer transition-300 hover:text-[var(--green-7)] ${
                  !open &&
                  "rotate-180 text-[var(--green-7)] absolute right-5 top-6"
                }`}
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="p-5">
              <ul className="menu">
                {routes.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={`menu-item ${activeRoute(item.path.toLocaleLowerCase()) && "menu-item-active"} ${open && activeRoute(item.path.toLocaleLowerCase()) && "menu-item-active-open-drawer"}`}
                    >
                      <div className="menu-item-icon">{item.icon}</div>
                      <span className="menu-item-title">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DesktopDrawer>
      ) : (
        <MobileDrawer open={open} setOpen={setOpen}></MobileDrawer>
      )}
    </>
  );
};

export default Drawer;
