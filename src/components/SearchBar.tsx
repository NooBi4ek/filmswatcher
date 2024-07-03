import { Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { fetchTitle } from "../store/reducers/titleSlice";

interface Props {
  focusValue: boolean;
  handleBlur: () => void;
}

const SearchBar: FC<Props> = ({ focusValue, handleBlur }) => {
  const searchData = useAppSelector<any>((state) => state.search.searchData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (id: any) => {
    navigate(`${id}`);
    dispatch(fetchTitle({ id }));
    handleBlur();
  };

  if (searchData.length !== 0) {
    return (
      <Stack
        sx={{
          display: focusValue ? "" : "none",
          position: "absolute",
          marginTop: "40px",
          background: "#000",
          maxWidth: "400px",
          maxHeight: "200px",
          overflowY: "auto",
        }}
      >
        {searchData.list.map((value: any) => (
          <Typography
            key={value.id}
            onClick={() => handleClick(value.id)}
            sx={{ cursor: "pointer", marginTop: "10px" }}
          >
            {value.names.ru}
          </Typography>
        ))}
      </Stack>
    );
  }
};

export default SearchBar;
