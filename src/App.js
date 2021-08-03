import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
