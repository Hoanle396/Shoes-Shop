import AllProducts from "./Pages/AllProducts/AllProducts";
import Basket from "./Pages/Basket/Basket";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Basket",
    element: <Basket />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Product/:id",
    element: <Product />,
  },
  {
    path: "/AllProducts",
    element: <AllProducts />,
  },
];

export default routes;
