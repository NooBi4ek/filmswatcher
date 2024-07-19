import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchGenres } from "../store/reducers/genresSlice";
import { Grid, Stack, SxProps, Theme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchTitlesPagesByCategory } from "../store/reducers/titlesSlice";

const responsiveTextStyles: SxProps<Theme> = {
  fontSize: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "0.85rem",
    lg: "1rem",
  },
  cursor: "pointer",
};

const Genres = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const genres = useAppSelector((state) => state.genres.genresData);
  const [genresFocus, setGenresFocus] = useState<boolean>(false);

  const handleClick = () => {
    setGenresFocus((prev) => !prev);
  };

  const handleNavigate = (genres: string) => {
    navigate(`/Жанр/${genres}`);
    dispatch(fetchTitlesPagesByCategory({ genres: genres }));
    setGenresFocus(false);
  };

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  return (
    <Stack sx={{ flexDirection: "row", userSelect: "none" }}>
      <Typography sx={{ cursor: "pointer" }} onClick={handleClick}>
        Категории
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: genresFocus ? "" : "none",
          position: "absolute",
          marginTop: "62px",
          width: "80vw",
          background: "#000",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {genres.map((el, index) => (
          <Grid item xs={2}>
            <Typography
              key={index}
              sx={responsiveTextStyles}
              onClick={() => handleNavigate(el)}
            >
              {el}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Genres;
