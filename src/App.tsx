import React from "react";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import { Stack } from "@mui/material";
import SearchBar from "./components/SearchBar";

function App() {
  // search bar open
  const [searchBarOpen, setSearchBarOpen] = React.useState<boolean>(false);

  return (
    <Stack direction="column" height={"100vh"}>
      <Header
        onSearch={() => setSearchBarOpen(searchBarOpen ? false : true)}
        onMenu={() => {}}
      />
      {searchBarOpen && (
        <SearchBar onFilterChange={() => {}} onSearch={() => {}} />
      )}
      {/* <SearchBar onFilterChange={() => {}} onSearch={() => {}} /> */}
      <ProductTable />
    </Stack>
  );
}

export default App;
