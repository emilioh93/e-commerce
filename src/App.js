import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
