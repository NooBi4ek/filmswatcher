import { Stack, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchTitle } from "../store/reducers/titleSlice";

interface Props {
  id: number;
}

const TitleList: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();

  const titleData = useAppSelector<any>((state) => state.title.titleData);

  useEffect(() => {
    dispatch(fetchTitle({ id }));
  }, []);

  const names = [
    { id: 1, name: "Жанры", value: titleData.genres },
    { id: 2, name: "Озвучка", value: titleData.team.voice },
    { id: 3, name: "Тайминг", value: titleData.team.timing },
    {
      id: 4,
      name: "Работа над субтитрами",
      value: titleData.team.translator,
    },
  ];

  return (
    <Stack gap="10px">
      {names.map((el) => (
        <Stack key={el.id} flexDirection="row">
          <Typography fontWeight="bold">{el.name}:</Typography>
          {el.value.length > 0 ? (
            el.value.map((type: any) => type).join(", ")
          ) : (
            <Typography>{`пока что нету (`}</Typography>
          )}
        </Stack>
      ))}
    </Stack>
  );
};

export default TitleList;
