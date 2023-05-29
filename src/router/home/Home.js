import { Logo } from "../../assets";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import {
  Categories,
  Footer1,
  Footer2,
  Footer3,
  NAVBAR_LINKS,
  Product,
} from "../../data/data";

function Home() {
  return (
    <>
      <Navbar logo={Logo} links={NAVBAR_LINKS} />
      <Category category={Categories} />
      <div className="appProduct">
        <Products product={Product} />
      </div>
      <Footer footer1={Footer1} footer2={Footer2} footer3={Footer3} />
    </>
  );
}

export default Home;
