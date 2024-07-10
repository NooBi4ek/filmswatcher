import { Stack, Typography } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Stack
      sx={{
        maxWidth: "100vw",
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
      <Typography onClick={handleClick} sx={{ cursor: "pointer" }}>
        Главная
      </Typography>
      <Search />
    </Stack>
  );
};

export default Header;
