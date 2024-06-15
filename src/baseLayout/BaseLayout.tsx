import { Outlet } from "react-router-dom";
import Footer1 from "../components/Footer1";
import NavBar from "../components/NavBar";
import ReadMore from "../components/ReadMore";

const BaseLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
      <ReadMore />
      <footer>
        <Footer1 />
      </footer>
    </>
  );
};

export default BaseLayout;
