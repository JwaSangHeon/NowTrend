import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import MobileNav from "./components/MobileNav";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);
  const onClickBtn = () => {
    menuBtn ? setMenuBtn(false) : setMenuBtn(true);
  };
  return (
    <div>
      <Header onClickBtn={onClickBtn} />
      <Nav />
      {menuBtn ? <MobileNav /> : null}
      <Main />
    </div>
  );
}

export default App;
