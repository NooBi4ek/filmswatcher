import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "100px",
        backgroundColor: "#262626",
        height: "100px",
        color: "#fff",
      }}
    >
      <div>Категории</div>
      <div>Главная</div>
      <Stack flexDirection="row">
        <TextField
          id="search-bar"
          className="text"
          label="Введите название"
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
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
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
