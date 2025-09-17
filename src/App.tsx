import { Route, Routes } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";
import HomePage from "./Pages/HomePage";
import SalesProducts from "./components/common/salesPage/SalesProducts";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/sales" element={<SalesProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
