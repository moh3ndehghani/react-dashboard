import Drawer from "layouts/main-layout/components/navbar/components/drawer/Drawer";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { MenuTwoTone } from "@mui/icons-material";
import Search from "layouts/main-layout/components/navbar/components/navbar/Search";
import Profile from "layouts/main-layout/components/navbar/components/navbar/Profile";
import Notification from "layouts/main-layout/components/navbar/components/navbar/Notification";
import Breadcrumb from "layouts/main-layout/components/navbar/components/navbar/Breadcrumb";
import { setOpen } from "store/SidebarStore";
import { useDispatch, useSelector } from "react-redux";
import RootStateModel from "models/global/RootStateModel";

interface Props {
  children: ReactNode;
}

const Navbar = (props: Props) => {
  const { children } = props;
  const open: boolean = useSelector(
    (state: RootStateModel) => state.SidebarStore.open
  );
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer />
      <div className="p-5 w-full">
        <div className="!w-full rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <Breadcrumb />
          <div className="flex items-center justify-between gap-3 p-2 rounded-xl bg-white">
            <Search />
            <div className="flex items-center gap-3">
              <div
                className="block lg:hidden navbar-icon bg-gray-100 text-gray-500 hover:bg-gray-200"
                onClick={() => dispatch(setOpen(!open))}
              >
                <MenuTwoTone />
              </div>
              <Notification />
              <Profile />
            </div>
          </div>
        </div>
        {children}
      </div>
    </Box>
  );
};

export default Navbar;
