import { Image, MenuOutlined } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        position: "sticky",
        padding: 2,
        justifyContent: "space-between",
        bgcolor: "white",
        alignItems: "end",
      }}
    >
      <Stack alignItems={"center"} direction="row">
        <img src={Logo} alt="" height={45} />
      </Stack>
      <MenuOutlined fontSize="large" />
    </Stack>
  );
}

export default Header;
