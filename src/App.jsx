import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import { useSelector } from "react-redux";

function App() {
  const hide = useSelector((store) => store.hide.hide);
  return (
    <>
      <Header />
      {!hide && <Cart />}
    </>
  );
}

export default App;
