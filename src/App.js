import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import "./Styles/AllStyles";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails";
import { IconButton } from "@mui/material";
import BuyProduct from "./Pages/BuyProduct";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import OrderPlaced from "./Pages/orderPlaced";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import AdminLayout from "./Pages/AdminLayout";
import Adminnavbar from "./Components/Admin Dashboard/adminnavbar/adminnavbar";
import ProductOptimizer from "./Components/Admin Dashboard/productOptimizer/productOptimizer";
const App = () => {
  // const location = useLocation();
  const checkAdmin = !window.location.pathname.toLowerCase().includes("admin");
  const routeArray = [
    { path: "/", name: Home },
    { path: "/login", name: Login },
    { path: "/signup", name: Signup },
    { path: "/dashboard", name: Dashboard },
    { path: "/product", name: ProductDetails },
    { path: "/buy-product", name: BuyProduct },
    { path: "/order-placed", name: OrderPlaced },
    { path: "/cart", name: Cart },
    { path: "/checkout", name: Checkout },
    { path: "/admin", name: AdminLayout },
    { path: "/product-optimizer", name: ProductOptimizer },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  let Current = routeArray[currentIndex].name;

  const handlePrevious = () => {
    if(currentIndex > 0)
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if(currentIndex < routeArray.length -1)
    setCurrentIndex(currentIndex + 1);
  };

  const displayfunc = () => {
    return <Route path={"/"} element={<Current />} />;
  };

  useEffect(() => {
    displayfunc()
  }, [currentIndex]);

  return (
    <div> 
      {checkAdmin ? <Navbar /> : <Adminnavbar />}

      <BrowserRouter>
        <div className="previewDiv">
          <div onClick={handlePrevious}>{"Previous"}</div>
          <h5> {  routeArray[currentIndex].path } </h5>
          <div onClick={handleNext}>{"Next"}</div>
        </div>

        <Routes>

          {displayfunc()}

          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Product" element={<ProductDetails />}></Route>
          <Route path="/Product-details" element={<ProductDetails />}></Route>
          <Route path="/buy-product" element={<BuyProduct />}></Route>
          <Route path="/order-placed" element={<OrderPlaced />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Admin" element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
      {checkAdmin && <Footer />}
    </div>
  );
};
export default App;
