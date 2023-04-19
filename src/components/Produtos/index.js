import React from "react";
import "./styles.scss";

function Produtos({ name, price, image, detailUrl }) {
  return (
    <div className="product-main">
      <div className="product-img">
        <img src={image} alt={detailUrl} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <label>R$ {price / 100}</label>
      </div>
    </div>
  );
}

export default Produtos;
