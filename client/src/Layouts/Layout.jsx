import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
// import Template1 from "./Template";

export default function Layout() {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
