// const DesktopDrawer = () => {
//   return <span>this is desktop drawer</span>;
// };

// export default DesktopDrawer;
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { useSelector } from "react-redux";
import RootStateModel from "models/global/RootStateModel";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 500,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: 500,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  children?: ReactNode;
}

const DesktopDrawer = (props: Props) => {
  const { children } = props;
  const store:RootStateModel = useSelector((state:RootStateModel) => state);
  return (
    <Drawer
      variant="permanent"
      open={store.SidebarStore.open}
    >
      {children}
    </Drawer>
  );
};

export default DesktopDrawer;
