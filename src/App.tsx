import { Route, Routes } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";
import HomePage from "./Pages/HomePage";
import NotFound404Page from "./Pages/NotFound404Page";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFound404Page />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
