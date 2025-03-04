// import { Route } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
// import { NavigationTitle } from "./component/navbardata";
import Shopall from "./component/shopAll";
import Newpage from "./component/new";
import Bestsellers from "./component/bestseller";
import Facepage from "./component/face";
import Lipspage from "./component/lips";
import Eyespage from "./component/eyes";
import Tiptop from "./component/tiptop";
import NowTrending from "./component/nowTrending";
import Footer from "./component/footer";
import Cart from "./component/cartPage";
// import Slider from "./component/Sliderimages";

// import Sidebar from "./component/sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div>{Sidebar}</div> */}
      <Routes>
        <Route path="/" element={<Tiptop />} />
      </Routes>
      {/* <NavigationTitle /> */}
      <Routes>
        <Route path="/shop-all" element={<Shopall />} />
        <Route path="/new" element={<Newpage />} />
        <Route path="/best-seller" element={<Bestsellers />} />
        <Route path="/face" element={<Facepage />} />
        <Route path="/lips" element={<Lipspage />} />
        <Route path="/eyes" element={<Eyespage />} />
        <Route path="/now-trending" element={<NowTrending />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Slider /> */}
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
