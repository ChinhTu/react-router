import React from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

function LeftSidebar({
  isShowLeftSidebar,
  setIsShowLeftSidebar,
  setActivePage,
  activePage,
}) {
  const routers = [
    {
      name: "Product List",
      path: "/products",
    },
    {
      name: "Create Product",
      path: "/createProduct",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "To Do List",
      path: "/todolist",
    },
  ];

  const renderSidebarItem = () => {
    return routers.map((item, index) => {
      return (
        <div
          className={
            activePage === item.path
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          key={index}
          onClick={() => {
            setActivePage(item.path);
            setIsShowLeftSidebar(false);
          }}
        >
          {item.name}
        </div>
      );
    });
  };
  return (
    <div
      className={
        isShowLeftSidebar ? "sidebar-overlay sidebar-show" : "sidebar-overlay"
      }
    >
      <div className="sidebar-container">
        {renderSidebarItem()}
        <div className="sidebar-content">Sidebar</div>
      </div>
      <div
        className="sidebar-outside"
        onClick={() => setIsShowLeftSidebar(false)}
      ></div>
    </div>
  );
}

export default LeftSidebar;
