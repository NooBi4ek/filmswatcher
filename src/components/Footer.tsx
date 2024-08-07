import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      sx={{
        maxWidth: "100vw",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "50px",
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
