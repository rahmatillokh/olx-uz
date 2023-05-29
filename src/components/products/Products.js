import React from "react";
import { useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
import { Product } from "../../data/data";

function Products({ product }) {
  const [state, setState] = useState(false);

  const handleClick = () => {
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };
  return (
    <div className="products">
      <h1>Премиум объявления</h1>
      <div className="product">
        {Product?.map(
          ({ img, text, location, time, cost, addFavourites, id }) => (
            <div className="item" key={id}>
              <Link
                to={`/product/${id}`}
                state={{
                  img,
                  text,
                  location,
                  time,
                  cost,
                }}
              >
                <img src={img} alt={text} />
              </Link>
              <h3>{text}</h3>
              <p className="title">
                {location} {`>`} {time}
              </p>
              <div className="fav">
                <p className="cost">{cost}</p>
                <div
                  onClick={handleClick}
                  className={`icon ${state ? `` : ``}`}
                >
                  {addFavourites}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Products;
