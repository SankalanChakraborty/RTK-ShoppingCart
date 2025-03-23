import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import Products from "./Components/Products";
import shopSlice from "./store/store";

function App() {
  const hide = useSelector((store) => store.hide.hide);
  const shop = useSelector((store) => store.shop.shop);
  console.log(shop);
  return (
    <>
      <div className="container">
        <Header />
        {!hide && <Cart />}
        {shop.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
