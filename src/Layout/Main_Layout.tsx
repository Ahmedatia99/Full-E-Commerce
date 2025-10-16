import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Main_Layout() {
  return (
    <div className="flex flex-col  min-h-screen ">
      <NavBar />

      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="flex-grow focus:outline-none md:pt-30 pt-55 sm:pt-40"
      >
        <Outlet />
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default Main_Layout;
