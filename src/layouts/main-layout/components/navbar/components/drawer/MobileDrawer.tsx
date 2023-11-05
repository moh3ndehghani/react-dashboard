import { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "store/SidebarStore";
import RootStateModel from "models/global/RootStateModel";

interface Props {
  children?: ReactNode;
}

const MobileDrawer = (props: Props) => {
  const { children } = props;
  const store: RootStateModel = useSelector((state: RootStateModel) => state);
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor="left"
      open={store.SidebarStore.open}
      onClose={() => dispatch(setOpen(false))}
    >
      <div className="w-[250px]">{children}</div>
    </Drawer>
  );
};

export default MobileDrawer;
