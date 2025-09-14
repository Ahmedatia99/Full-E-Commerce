import HomePage from "@/Pages/HomePage";
import { Route, Routes } from "react-router-dom";

function Main_Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Main_Layout;
