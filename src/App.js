import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Community from "./components/Community";
import Layout from "./components/Layout";
import Itnews from "./components/Itnews";
import Report from "./components/Report";
import Intro from "./components/Intro";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/report" element={<Report />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/itnews" element={<Itnews />} />
      </Route>
    </Routes>
  );
}

export default App;
