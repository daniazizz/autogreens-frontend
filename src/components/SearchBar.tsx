import React, { useState } from "react";
import { TextField, IconButton, Box, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { FilterAlt, FilterAltOff } from "@mui/icons-material";

interface SearchBarProps {
  onSearch: (query: string) => void; // Function called when search input changes
  onFilterChange: (categories: string[]) => void; // Function called when filter options are updated
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Fruits",
    "Legumes",
    "4de Gamma",
  ]); // Default: Fruits selected

  const toggleFilterVisibility = () => {
    setShowFilters((prev) => !prev);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) => {
      // Toggle the category
      if (prev.includes(category)) {
        // If only one category is selected, don't allow deselecting it
        if (prev.length === 1) return prev;
        const updatedCategories = prev.filter((item) => item !== category);
        onFilterChange(updatedCategories); // Automatically apply filter
        return updatedCategories;
      } else {
        // Add the category
        const updatedCategories = [...prev, category];
        onFilterChange(updatedCategories); // Automatically apply filter
        return updatedCategories;
      }
    });
  };

  return (
    <Box sx={{ paddingX: 2, paddingBottom: 2 }}>
      {/* Search Bar */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          // Have placeholder recherche with a loop icon in front

          variant="outlined"
          placeholder="Recherche"
          fullWidth
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(e.target.value)
          }
          sx={{
            // no zoomin effect when pressed:

            "&:hover": {
              transform: "none",
            },
            //font size small
            "& input": {
              fontSize: "16",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#555",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#333",
              },
            },
          }}
        />
        {/* Use FilterALT and FilterAlt icons, for filter menu open and closed */}
        {/* <IconButton
          onClick={toggleFilterVisibility}
          sx={{
            color: "#fff",
            backgroundColor: "#333",
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          <FilterListIcon />
        </IconButton> */}

        <IconButton
          onClick={toggleFilterVisibility}
          size="small"
          sx={{
            color: "#fff",
            backgroundColor: "#333",
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          {showFilters ? <FilterAlt /> : <FilterAltOff />}
        </IconButton>
      </Box>

      {/* Filter Options */}
      {showFilters && (
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {["Fruits", "Legumes", "4de Gamma"].map((category) => (
            <Button
              key={category}
              variant={
                selectedCategories.includes(category) ? "contained" : "outlined"
              }
              onClick={() => handleCategoryToggle(category)}
              sx={{
                color: selectedCategories.includes(category) ? "#fff" : "#000",
                backgroundColor: selectedCategories.includes(category)
                  ? "#333"
                  : "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: selectedCategories.includes(category)
                    ? "#444"
                    : "#eee",
                },
                textTransform: "none",
                fontSize: "0.8rem",
              }}
            >
              {category}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
