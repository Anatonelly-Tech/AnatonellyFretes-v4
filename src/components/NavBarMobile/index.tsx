"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { RxHamburgerMenu } from "react-icons/rx";

const items = [
  {
    key: 1,
    name: "Home",
    path: "/",
  },
  {
    key: 2,
    name: "Cadastre seu veiculo",
    path: "/",
  },
  {
    key: 3,
    name: "Veiculos cadastrados",
    path: "/",
  },
  {
    key: 4,
    name: "Fretes disponiveis",
    path: "/",
  },
  {
    key: 5,
    name: "Dados pessoais",
    path: "/",
  },
  {
    key: 6,
    name: "Sair",
    path: "/",
  },
];

const NavBarMobile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed top-0 right-0">
      <Button
        className="bg-violet-600 rounded shadow-especial shadow-violet-950 hover:shadow-zinc-800 active:bg-purple-600"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="primary"
      >
        <RxHamburgerMenu size={22} className="text-white" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
          style: { padding: 0 },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{
          style: {
            backgroundColor: "#7e22ce",
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.key}
            className="bg-purple-700 hover:bg-purple-800 text-white text-center m-0 flex items-center justify-center font-bold mt-1 rounded shadow-inner shadow-purple-900 py-2 px-4"
            onClick={handleClose}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavBarMobile;
