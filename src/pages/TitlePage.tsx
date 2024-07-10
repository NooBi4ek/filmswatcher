import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { chooseEpisode, fetchTitle } from "../store/reducers/titleSlice";
import MainLayout from "../layout/MainLayout";
import TitleList from "../components/TitleList";

const TitlePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { src, poster } = useAppSelector((state) => state.title);

  const handleClick = (
    video: SetStateAction<string>,
    preview: SetStateAction<string>
  ) => {
    dispatch(chooseEpisode({ video, preview }));
  };

  const titleData = useAppSelector<any>((state) => state.title.titleData);

  useEffect(() => {
    dispatch(fetchTitle({ id }));
  }, []);

  if (titleData.length !== 0 && titleData.id == id) {
    return (
      <MainLayout>
        <Box sx={{ margin: "0 0 400px 50px" }}>
          <Stack flexDirection="row" gap="20px">
            <Box
              component="img"
              sx={{
                width: "300px",
                height: "300px",
                backgroundImage: `url(https://anilibria.tv/${titleData.posters.small.url})`,
              }}
            />
            <Stack gap="10px">
              <Typography variant="h6">
                Название: {titleData.names.ru}
              </Typography>
              <TypographyBold>
                Сезон:
                <Typography>
                  {titleData.season.year} {titleData.season.string}
                </Typography>
              </TypographyBold>
              <TypographyBold>
                Тип: <Typography>{titleData.type.full_string}</Typography>
              </TypographyBold>
              <TitleList id={titleData.id} />
            </Stack>
          </Stack>
          <Stack sx={{ maxWidth: "80vw", marginTop: "50px" }}>
            <Typography>{titleData.description}</Typography>
          </Stack>
          <Stack
            sx={{
              marginTop: "100px",
              marginBottom: "5vh",
            }}
          >
            <ReactPlayer
              url={`https://cache.libria.fun${src}`}
              playing={false}
              controls
              light={`https://anilibria.tv${poster}`}
            />
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              gap: "20px",
              maxWidth: "40vw",
              flexWrap: "wrap",
            }}
          >
            {Object.entries(titleData.player.list).map(([key, item]: any) => (
              <Button
                key={key}
                onClick={() => {
                  handleClick(item.hls.fhd, item.preview);
                }}
                variant="outlined"
              >
                {item.episode} серия
              </Button>
            ))}
          </Stack>
        </Box>
      </MainLayout>
    );
  }
};

export default TitlePage;

export const TypographyBold = styled(Typography)`
  display: flex;
  flex-direction: row;
  font-weight: bold;
`;
