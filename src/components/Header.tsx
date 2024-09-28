import { Stack, Typography } from "@mui/material";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Genres from "./Genres";
import { useAppDispatch } from "../store/hooks";
import { fetchTitles } from "../store/reducers/titlesSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate("/");
    dispatch(fetchTitles({ page: 1 }));
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
      <Genres />
      <Typography onClick={handleClick} sx={{ cursor: "pointer" }}>
        Главная
      </Typography>
      <Search />
    </Stack>
  );
};

export default Header;
