import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [menuBtns, setMenuBtns] = useState(false);
  const onClickBtn = () => {
    menuBtns ? setMenuBtns(false) : setMenuBtns(true);
  };
  return (
    <div>
      <Header onClickBtn={onClickBtn} />
      {menuBtns ? <MobileNav /> : <Nav />}
      <Outlet />
    </div>
  );
};

export default Layout;
