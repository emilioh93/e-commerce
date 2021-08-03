import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutCard from "./components/CheckoutCard";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <CheckoutPage></CheckoutPage>
      {/* <CheckoutCard></CheckoutCard>
      <Products></Products> */}
    </div>
  );
}

export default App;
