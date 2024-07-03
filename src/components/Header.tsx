import { Stack } from "@mui/material";
import Search from "./Search";

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
      <Search />
    </Stack>
  );
};

export default Header;
