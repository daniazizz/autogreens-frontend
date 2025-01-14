import { Image, MenuOutlined, Search } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";

// Header props include on press search and menu:
// onSearch: function called when search icon is pressed
// onMenu: function called when menu icon is pressed
interface HeaderProps {
  onSearch: () => void;
  onMenu: () => void;
}

function Header({ onSearch, onMenu }: HeaderProps) {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        padding: 2,
        justifyContent: "space-between",
        bgcolor: "white",
        alignItems: "center",
      }}
    >
      {/* Logo Section */}
      <Stack alignItems={"center"} direction="row">
        <img src={Logo} alt="" height={40} />
      </Stack>

      {/* Menu and Search Section */}
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton onClick={onSearch}>
          <Search fontSize="large" sx={{ color: "black" }} />
        </IconButton>
        <MenuOutlined fontSize="large" onClick={onMenu} />
      </Stack>
    </Stack>
  );
}

export default Header;
