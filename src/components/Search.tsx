import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../store/hooks";
import { useState } from "react";
import { fetchSearch } from "../store/reducers/searchSlice";
import SearchBar from "./SearchBar";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [focusValue, setFocusValue] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setFocusValue(true);
  };

  const handleBlur = () => {
    setFocusValue(false);
  };

  const handleClick = () => {
    setFocusValue(true);
    dispatch(fetchSearch({ name: inputValue }));
  };

  return (
    <Stack flexDirection="row">
      <TextField
        id="search-bar"
        className="text"
        label="Введите название"
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          width: "400px",
          ".MuiOutlinedInput-input": {
            color: "#fff",
          },
          ".MuiInputLabel-root": {
            color: "#fff",
          },
          ".MuiOutlinedInput-input:-webkit-autofill": {
            boxShadow: "0 0 0 30px #202740 inset !important",
            borderRadius: "0px",
            "-webkit-text-fill-color": "#fff ",
          },
        }}
        value={inputValue}
        onInput={handleInput}
        onFocus={handleFocus}
      />
      <IconButton type="submit" aria-label="search" onClick={handleClick}>
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
      <SearchBar focusValue={focusValue} handleBlur={handleBlur} />
    </Stack>
  );
};

export default Search;
