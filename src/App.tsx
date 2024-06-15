
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BaseLayout from "./baseLayout/BaseLayout";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="/home" element={<Home/>} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Route>
  )
);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
