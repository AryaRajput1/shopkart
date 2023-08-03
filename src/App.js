import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route
            path="home"
            element={
                <Home />
            }
          />
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
