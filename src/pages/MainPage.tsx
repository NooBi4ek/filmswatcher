import { Stack } from "@mui/material";
import Card from "../components/Card";
import MainLayout from "../layout/MainLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTitle } from "../store/reducers/titleSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useAppSelector } from "../store/hooks";
import Pagination from "../components/Pagination";

const MainPage = () => {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const data = useAppSelector<any>((state) => state.title.titleData);

  const defaultPage = 1;

  const handleChange = (event: any) => {
    dispatch(fetchTitle({ page: event.target.textContent }));
  };

  useEffect(() => {
    dispatch(fetchTitle({ page: defaultPage }));
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
            margin: "0 auto",
          }}
        >
          {data.list.map((title: any) => (
            <Card
              key={title.id}
              poster={title.posters.small.url}
              names={title.names.ru}
              episodes={title.type.episodes}
              status={title.status.string}
              year={title.season.year}
            />
          ))}
        </Stack>
        <Stack marginTop="200px">
          <Pagination
            count={Number(data.pagination.pages)}
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
