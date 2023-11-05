import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopDrawer from "layouts/main-layout/components/navbar/components/drawer/DesktopDrawer";
import MobileDrawer from "layouts/main-layout/components/navbar/components/drawer/MobileDrawer";
import MenuItems from "layouts/main-layout/components/navbar/components/drawer/MenuItems";

const Drawer = () => {
  const checkDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <>
      {checkDesktop ? (
        <DesktopDrawer>
          <MenuItems />
        </DesktopDrawer>
      ) : (
        <MobileDrawer>
          <MenuItems />
        </MobileDrawer>
      )}
    </>
  );
};

export default Drawer;
