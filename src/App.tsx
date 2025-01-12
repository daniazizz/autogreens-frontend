import React from "react";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import { Stack } from "@mui/material";

function App() {
  return (
    <Stack direction="column" height={"100vh"}>
      <Header />
      <ProductTable />
    </Stack>
  );
}

export default App;
