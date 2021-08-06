import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Checkout from "./components/CheckoutForm/Checkout";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Products></Products>
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage></CheckoutPage>
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/checkout-payment">
            <Checkout></Checkout>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
