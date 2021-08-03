import "./App.css";
import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Products></Products>
      {/* <Product></Product> */}
    </div>
  );
}

export default App;
