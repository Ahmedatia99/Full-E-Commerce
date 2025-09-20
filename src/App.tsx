import { Route, Routes } from "react-router-dom";
import Main_Layout from "./Layout/Main_Layout";

import NotFound404Page from "./Pages/ERROR-Page";
import Contact from "./Pages/Contact-Page";
import CartPage from "./Pages/Cart-Page";
import CheckoutPage from "./Pages/Checkout-Page";
import ProductsDetails from "./Pages/products-Details-Page";
import HomePage from "./Pages/Home-Page";
import SignUp from "./Pages/Signup-Page";
import Login from "./Pages/Login-Page";
import AccountPage from "./Pages/Profile-Page";
import { useTranslation } from "react-i18next";
import About from "./Pages/About-Page";

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
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/Checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
