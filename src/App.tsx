import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToUp";
import Topbar from "./Components/Topbar/Topbar";
import routes from "./routes";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initFlowbite();
  }, []);

  const router = useRoutes(routes);
  return (
    <>
      <ScrollToTop>
        <Topbar />
        {router}
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
