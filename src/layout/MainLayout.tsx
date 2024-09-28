import { FC, ReactNode } from "react";
import { Stack } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

import background from "../img/wallpaperflare.com_wallpaper.jpg";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />
      <Stack sx={{ flex: "1" }}>{children}</Stack>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
