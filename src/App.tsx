import { Route, Routes } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";

import NotFound404Page from "./Pages/NotFound404Page";
import Contact from "./Pages/Contact";
import ProductsDetails from "./Pages/productsDetails";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import AccountPage from "./Pages/AccountPage";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

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
