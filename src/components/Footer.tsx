import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "200px",
        backgroundColor: "#262626",
        height: "100px",
        color: "#fff",
      }}
    >
      <div>Категории</div>
      <div>Главная</div>
      <div>О нас</div>
    </Stack>
  );
};

export default Footer;
