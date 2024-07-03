import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TitlePage from "./pages/TitlePage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/:id" element={<TitlePage />} />
    </Routes>
  );
};

export default App;
