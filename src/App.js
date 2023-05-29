import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./router/home/Home";
import ProductInfo from "./router/product-info/ProductInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
