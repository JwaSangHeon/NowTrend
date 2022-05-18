import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Tech from "./components/Tech";
import Layout from "./components/Layout";
import JobSite from "./components/JobSite";
import Velog from "./components/Velog";
import Itnews from "./components/Itnews";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/jobsite" element={<JobSite />} />
        <Route path="/velog" element={<Velog />} />
        <Route path="/itnews" element={<Itnews />} />
      </Route>
    </Routes>
  );
}

export default App;
