import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mens from "./component/Mens";
import Page2 from "./component/Page2";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import client from "./client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fotter from "./component/fotter";
import Womens from "./component/Womens";
import SuccessPage from "./component/SuccessPage";

function App() {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "banner"]')
      .then((bannerData) => setBannerData(bannerData))
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>

        <div className="wrapper">
        
          <Routes>
            <Route path="/" element={<Home data={bannerData}></Home>} />
            <Route path="/Mens" element={<Mens />} />
            <Route path="/Womens" element={<Womens />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/Products" element={<Products></Products>} />
            <Route path="/page2/:id" element={<Page2 />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
