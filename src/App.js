import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About></About>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
