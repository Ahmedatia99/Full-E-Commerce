// import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/*  */}
      <Footer />
      <div className="p-10 flex gap-5">
        <Button
          variant="default"
          size="lg"
          onClick={() => alert("Button clicked default!")}
        >
          click
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => alert("Button clicked secondary!")}
        >
          click
        </Button>
        <Button
          variant="small"
          size="lg"
          onClick={() => alert("Button clicked small!")}
          className=" "
        >
          click
        </Button>
      </div>
    </>
  );
}

export default App;
