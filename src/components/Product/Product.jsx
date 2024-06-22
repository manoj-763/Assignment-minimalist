import "./Product.css";
import line from "../../assets/Fram.png";
import product_photo from "../../assets/cart1.png";
import { useState } from "react";
import Popup from "../Popup/Popup";

const Product = () => {
  const [isOpen, setOpen] = useState(false);

  const popUpHandle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <Popup handleClose={popUpHandle} />}
      <div className="container-product">
        <img src={line} />
        <h1>Our products</h1>
        <img src={line} />
      </div>
      <div className="cart-container">
        <div className="left-column">
          <img src={product_photo} />
          <div className="cart">
            <h1>Raju Rassibomb</h1>
            <button onClick={popUpHandle}>Quick View</button>
          </div>
        </div>
        <div className="right-column">
          <img src={product_photo} />
          <div className="cart">
            <h1>Ladiyon ki Rani Chani</h1>
            <button onClick={popUpHandle}>Quick View</button>
          </div>
        </div>
      </div>
      <img className="product-bottom-line" src={line} />
    </div>
  );
};

export default Product;
