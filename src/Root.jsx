import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";



import Navbarr from "./Components/NavBar/Navbarr";

function Root() {
  return (
    <div className="container mx-auto">
      <Navbarr />



      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
