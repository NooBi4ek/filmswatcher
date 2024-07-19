import { Stack } from "@mui/material";
import Card from "../components/Card";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchTitles,
  fetchTitlesByCategory,
  fetchTitlesPagesByCategory,
} from "../store/reducers/titlesSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useAppSelector } from "../store/hooks";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const { genres } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const data = useAppSelector<any>((state) => state.titles.titlesData);
  const genresPage = useAppSelector<any>((state) => state.titles.genresPage);

  const defaultPage = 1;

  const handleChange = (event: any) => {
    if (genres !== undefined) {
      dispatch(
        fetchTitlesByCategory({ page: event.target.textContent, genres })
      );
    } else {
      dispatch(fetchTitles({ page: event.target.textContent }));
    }
  };

  useEffect(() => {
    if (genres !== undefined) {
      dispatch(fetchTitlesPagesByCategory({ genres: genres }));
    } else {
      dispatch(fetchTitles({ page: defaultPage }));
    }
  }, []);
  if (data.length !== 0) {
    return (
      <MainLayout>
        <Stack
          sx={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "300px",
            margin: "0 auto 50px auto",
          }}
        >
          {data.list.map((title: any) => (
            <Card
              key={title.id}
              id={title.id}
              poster={title.posters.small.url}
              names={title.names.ru}
              episodes={title.type.episodes}
              status={title.status.string}
              year={title.season.year}
            />
          ))}
        </Stack>
        <Stack>
          <Pagination
            count={Number(
              genres !== undefined ? genresPage : data.pagination.pages
            )}
            variant="outlined"
            onChange={(event: any) => {
              handleChange(event);
            }}
          />
        </Stack>
      </MainLayout>
    );
  }
};

export default MainPage;
