import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, InputNumber } from "antd";
import Item from "./components/Item";

// import [Ten bien] from [Duong dan file]

function ProductList({ productList }) {
  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item
          key={index}
          name={item.name}
          price={item.price}
          isNew={item.isNew}
        />
      );
    });
  };

  return (
    <>
      <h2>Product List</h2>
      <div className="list">{renderProductList()}</div>
    </>
  );
}
export default ProductList;
