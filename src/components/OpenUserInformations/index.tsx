import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

import Button from "@mui/material/Button";
import UserInformation from "../UserInformations";
import { FaClipboardUser } from "react-icons/fa6";

export default function OpenUserInformations() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 hover:bg-purple-700">
      <Button onClick={handleOpen}>
        <FaClipboardUser className="text-xl text-white" />
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <UserInformation />
      </Backdrop>
    </div>
  );
}
