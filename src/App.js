import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import MobileNav from "./components/MobileNav";

function App() {
  const [menuBtns, setMenuBtns] = useState(false);
  const onClickBtn = () => {
    menuBtns ? setMenuBtns(false) : setMenuBtns(true);
  };
  return (
    <div>
      <Header onClickBtn={onClickBtn} />
      {menuBtns ? <MobileNav /> : <Nav />}
      <Main />
    </div>
  );
}

export default App;
