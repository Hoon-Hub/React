import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Products from "./component/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
