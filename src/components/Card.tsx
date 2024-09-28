import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { fetchTitle } from "../store/reducers/titleSlice";
import { useState } from "react";

const Card = ({ id, names, episodes, status, year, poster }: ICard) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [hoverCard, setHoverCard] = useState<boolean>(false);

  const handleClick = () => {
    navigate(`Аниме/${id}`);
    dispatch(fetchTitle({ id }));
  };

  const handleMouseEvent = (e: boolean) => {
    setHoverCard(e);
  };

  return (
    <Box
      sx={{
        width: "400px",
        height: "400px",
        borderRadius: "10px",
        backgroundImage: `url(https://anilibria.tv/${poster})`,
        boxSizing: "border-box",
        userSelect: "none",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => handleMouseEvent(true)}
      onMouseLeave={(e) => handleMouseEvent(false)}
    >
      <Stack
        sx={{
          height: "100%",
          width: "100%",
          background: hoverCard ? "rgba(0,0,0,0.5)" : "",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            display: hoverCard ? "" : "none",
            flexDirection: "row",
            flex: "1",
            padding: "20px 20px",
            ":hover": {
              transition: "0.5s ease",
            },
          }}
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                color: "#fff",
              }}
            >
              <Typography>
                {episodes !== null ? episodes : "Неизвестно"}
              </Typography>
              <Typography>{status}</Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                textAlign: "center",
                color: "#fff",
                transition: "all 1s ease",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                }}
              >
                {names}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
