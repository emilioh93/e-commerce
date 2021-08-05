import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
