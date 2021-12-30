import React, { useState } from "react";
import "./App.css";
import { Form, Input, Button, Checkbox, Card, InputNumber } from "antd";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import LeftSidebar from "./layouts/LeftSidebar";
import RightSidebar from "./layouts/RightSidebar";
import CreateProductForm from "./pages/CreateFormProduct";
import LoginAndRegisterForm from "./pages/LoginAndRegister";
import ToDoList from "./pages/ToDoList";
import ProductList from "./pages/ProductList";

// import [Ten bien] from [Duong dan file]

function App() {
  const [count, setCount] = useState(5);
  const [activePage, setActivePage] = useState("");
  console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ activePage", activePage);
  const [isShowLeftSidebar, setIsShowLeftSidebar] = useState(false);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false);
  const [productList, setProductList] = useState([
    {
      name: "Iphone 13",
      price: 23000000,
      isNew: true,
    },
    {
      name: "Iphone 6",
      price: 7000000,
      isNew: true,
    },
    {
      name: "Iphone 7",
      price: 8000000,
      isNew: false,
    },
    {
      name: "Iphone 8",
      price: 9000000,
      isNew: false,
    },
    {
      name: "Iphone 8plus",
      price: 100000,
      isNew: false,
    },
    {
      name: "Iphone X",
      price: 11000000,
      isNew: true,
    },
    {
      name: "Iphone XS",
      price: 12000000,
      isNew: true,
    },
    {
      name: "Iphone XSMax",
      price: 13000000,
      isNew: false,
    },
    {
      name: "Iphone 11",
      price: 14000000,
      isNew: false,
    },
    {
      name: "Iphone 12",
      price: 16000000,
      isNew: false,
    },
  ]);

  const handleAddProduct = (values) => {
    setProductList([...productList, values]);
  };

  // const renderPages = () => {
  //   switch (activePage) {
  //     case "/products":
  //       return <ProductList productList={productList} />;
  //     case "/createProduct":
  //       return <CreateProductForm handleAddProduct={handleAddProduct} />;
  //     case "/login":
  //       return <LoginAndRegisterForm />;
  //     case "/todolist":
  //       return <ToDoList />;
  //     default:
  //       return <ProductList productList={productList} />;
  //   }
  // };

  return (
    <div className="app">
      <LeftSidebar
        isShowLeftSidebar={isShowLeftSidebar}
        setIsShowLeftSidebar={setIsShowLeftSidebar}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      <Header
        setIsShowLeftSidebar={setIsShowLeftSidebar}
        name="Chinh"
        address="Ha Tinh"
      />
      <div className="main-container">
        <div
          className={
            isShowRightSidebar
              ? "main-content main-show-sidebar"
              : "main-content"
          }
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div>{count}</div>
              <button onClick={() => setCount(count + 1)}>+ Count</button>
              <button onClick={() => setCount(count - 1)}>- Count</button>
            </div>
            <button onClick={() => setIsShowRightSidebar(!isShowRightSidebar)}>
              Open right sidebar
            </button>
          </div>
          {/* {renderPages()} */}
          <Routes>
            <Route
              path="/products"
              element={<ProductList productList={productList} />}
            />
            <Route
              path="/createProduct"
              element={
                <CreateProductForm handleAddProduct={handleAddProduct} />
              }
            />
            <Route path="/login" element={<LoginAndRegisterForm />} />
            <Route path="/todolist" element={<ToDoList />} />
          </Routes>
        </div>
        <RightSidebar isShowRightSidebar={isShowRightSidebar} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
