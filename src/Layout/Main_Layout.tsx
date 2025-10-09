import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Main_Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navigation */}
      <header role="banner">
        <NavBar />
      </header>

      {/* Main content area */}
      <main
        id="main-content"
        role="main"
        tabIndex={-1} // Allows "Skip to content" links to focus this area
        className="flex-grow focus:outline-none  md:pt-28 pt-55  sm:pt-40 " //not safity but waiting my friends to see it maybe i add on scroll 0 header not be fixed
      >
        <Outlet />
      </main>

      {/* Footer */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

export default Main_Layout;
