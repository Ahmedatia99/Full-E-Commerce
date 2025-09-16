import Footer from "@/components/common/Footer";
import Header from "@/components/HomePage/Header";
import NavBar from "@/components/HomePage/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Main_Layout() {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  );
}

export default Main_Layout;
