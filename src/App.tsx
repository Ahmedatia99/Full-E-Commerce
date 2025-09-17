import { Route, Routes } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";
import ProductsDetails from "./pages/productsDetails";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AccountPage from "./pages/AccountPage";
import NotFound404Page from "./Pages/NotFound404Page";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductsDetails />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="*" element={<NotFound404Page />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
