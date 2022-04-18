import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home";
import HowItWorks from "./components/main/HowItWorks";
import Meals from "./components/main/Meals";
import Pricing from "./components/main/Pricing";
import Testemonials from "./components/main/Testemonials";
import Cart from "./components/UI/Cart";
import "./general.css";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }

  function hideCart() {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="how" element={<HowItWorks />} />
        <Route path="meals" element={<Meals />} />
        <Route path="testemonials" element={<Testemonials />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}
export default App;
