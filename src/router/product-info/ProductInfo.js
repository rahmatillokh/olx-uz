import { useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Logo } from "../../assets";
import { Footer1, Footer2, Footer3, NAVBAR_LINKS, Product } from "../../data/data";
import "./css/ProductInfo.css"
import Products from "../../components/products/Products";

function ProductInfo() {
  const { state } = useLocation();
  if (!state) {
    return <h2>Malumot Topilmadi</h2>;
  }
  return (
    <>
      <Navbar logo={Logo} links={NAVBAR_LINKS} />
      <div className="product__info">
        <div className="left">
          <img src={`${state.img}`} alt="" />
        </div>
        <div className="right">
          <h2 className="title">{state.text}</h2>
          <div className="newDiv">
            <h3 className="location">{state.location}</h3>
            <h4 className="time">{state.time}</h4>
          </div>
          <div className="buy">
            <h5 className="cost">{state.cost}</h5>
            <FiHeart size="26px" className="icon" />
            <button className="btn btn-primary">Sotib olish</button>
          </div>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic pariatur provident, quo tempore ut molestias suscipit voluptatum est quos quas perspiciatis eligendi impedit obcaecati facilis nisi reiciendis, voluptatem asperiores corporis ex doloribus officia? Eum neque autem ducimus, nemo atque, quis libero quod voluptas laudantium excepturi incidunt tempora facere voluptates.</p>
        </div>
      </div>

      <Products product={Product} />

      <Footer footer1={Footer1} footer2={Footer2} footer3={Footer3} />
    </>
  );
}

export default ProductInfo;
