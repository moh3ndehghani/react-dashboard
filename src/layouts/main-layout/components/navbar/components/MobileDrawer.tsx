import { Dispatch, ReactNode, SetStateAction } from "react";
import Drawer from "@mui/material/Drawer";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

const MobileDrawer = (props: Props) => {
  const { open, setOpen, children } = props;

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <div className="w-[250px]">{children}</div>
    </Drawer>
  );
};

export default MobileDrawer;
