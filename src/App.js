import { Fragment, useState } from "react";

import Header from "../src/components/Layout/Header";
import Sweets from "./components/Sweets/Sweets";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AuthPage from "./pages/AuthPage";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [authPage, setAuthPage] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showAuthFormHandler = () => {
    setAuthPage(true);
  };
  const hideAuthFormHandler = () => {
    setAuthPage(false);
  };

  return (
    <Fragment>
      {authPage && <AuthPage onClose={hideAuthFormHandler} />}
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} onShowAuth={showAuthFormHandler} />
        <main>
          <Sweets />
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
