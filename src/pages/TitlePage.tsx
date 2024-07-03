import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { fetchTitle } from "../store/reducers/titleSlice";

const TitlePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const titleData = useAppSelector<any>((state) => state.title.titleData);

  useEffect(() => {
    dispatch(fetchTitle({ id }));
  }, []);

  if (titleData.length !== 0 && titleData.id == id) {
    return <Stack>{titleData.names.ru}</Stack>;
  }
};

export default TitlePage;
