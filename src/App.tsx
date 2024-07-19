import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TitlePage from "./pages/TitlePage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="Жанр/:genres" element={<MainPage />} />
      <Route path="Аниме/:id" element={<TitlePage />} />
    </Routes>
  );
};

export default App;
