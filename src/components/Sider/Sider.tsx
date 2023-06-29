"use client";
import React from "react";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Home", "sub1", <HomeOutlined />),
  getItem("Search", "sub1", <SearchOutlined />),
];

const Sider = () => {
  return (
    <Menu
      className="bg-neutral-900 rounded-lg text-white font-semibold"
      mode="inline"
      items={items}
    ></Menu>
  );
};

export default Sider;
