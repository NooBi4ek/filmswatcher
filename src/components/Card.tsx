import { Box, Stack, Typography } from "@mui/material";

const Card = ({ names, episodes, status, year, poster }: ICard) => {
  return (
    <Box sx={{ height: "300px", textAlign: "center" }}>
      <Box
        sx={{
          width: "300px",
          height: "300px",
          borderRadius: "10px",
          backgroundImage: `url(https://anilibria.tv/${poster})`,
          boxSizing: "border-box",
          padding: "10px 20px",
          margin: "30px 0",
        }}
      >
        <Stack
          flexDirection="row"
          gap="30px"
          height="100%"
          width="100%"
          flex="1"
        >
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              flexDirection: "column",
              gap: "15px",
              justifyContent: "space-between",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography sx={{ background: "#fff", borderRadius: "5px" }}>
                {episodes}
              </Typography>
              <Typography sx={{ background: "#fff", borderRadius: "5px" }}>
                {status}
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography sx={{ background: "#fff", borderRadius: "5px" }}>
                {year}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Typography sx={{ width: "300px" }}>{names}</Typography>
    </Box>
  );
};

export default Card;
