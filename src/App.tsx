import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsDetails from "./pages/productsDetails";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Test" element={<Test />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
