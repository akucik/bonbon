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
  const showAuthHandler = () => {
    setAuthPage(true);
  };
  const removeAuthHandler = () => {
    setAuthPage(false);
  };

  return (
    <Fragment>
      {authPage && <AuthPage onClose={removeAuthHandler} />}
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} onShowAuth={showAuthHandler} />
        <main>
          <Sweets />
        </main>
      </CartProvider>
    </Fragment>
  );
}

export default App;
