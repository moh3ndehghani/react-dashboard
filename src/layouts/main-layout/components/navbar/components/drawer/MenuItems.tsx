import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopDrawer from "layouts/main-layout/components/navbar/components/drawer/DesktopDrawer";
import MobileDrawer from "layouts/main-layout/components/navbar/components/drawer/MobileDrawer";
import {
  InsertChartTwoTone,
  KeyboardDoubleArrowRightTwoTone,
  HomeTwoTone,
  PersonTwoTone,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import MenuModel from "models/global/MenuModel";
import { setOpen } from "store/SidebarStore";
import { useDispatch, useSelector } from "react-redux";
import RootStateModel from "models/global/RootStateModel";

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

const MenuItems = () => {
  const open: boolean = useSelector(
    (state: RootStateModel) => state.SidebarStore.open
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const checkDesktop = useMediaQuery("(min-width:1024px)");

  const activeRoute = (routerPath: string): boolean => {
    if (routerPath === "/" && location.pathname === "/") {
      return true;
    } else if (routerPath !== "/" && location.pathname.includes(routerPath)) {
      return true;
    } else return false;
  };

  return (
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
        {checkDesktop && (
          <KeyboardDoubleArrowRightTwoTone
            className={`cursor-pointer transition-300 hover:text-[var(--green-7)] ${
              !open && "rotate-180 text-[var(--green-7)] absolute right-5 top-6"
            }`}
            onClick={() => dispatch(setOpen(!open))}
          />
        )}
      </div>
      <div className="p-5">
        <ul className="menu">
          {routes.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`menu-item ${
                  activeRoute(item.path.toLocaleLowerCase()) &&
                  "menu-item-active"
                } ${
                  open &&
                  activeRoute(item.path.toLocaleLowerCase()) &&
                  "menu-item-active-open-drawer"
                }`}
              >
                <div className="menu-item-icon">{item.icon}</div>
                <span className="menu-item-title">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
