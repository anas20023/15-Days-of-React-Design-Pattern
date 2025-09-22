import ProductListPresenter from "./ProductListPresenter"
import axios from "axios"
import { useState, useEffect } from "react"
import SpinLoader from "../Handlers/SpinLoader";
import ErrorHandler from "../Handlers/ErrorHandler";
import CartContainer from "../Cart/CartContainer";
import Navbar from "../Navbar";
const ProductListContainer = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoader(true)
      const res = await axios.get("https://fakestoreapi.com/products")
      // console.log(res.data)
      setProducts(res.data);
      setLoader(false);
      setError(false)
    } catch (e) {
      //console.log(e);
      setLoader(false);
      setError(true)
      setErrmsg(e.message)
    }
  }


  useEffect(() => {
    fetchProducts();
  }, []);



  const handleReTry = () => {
    fetchProducts();
  }



  if (loader) {
    return <SpinLoader message={"Fetching Data from API"} />
  }
  if (error) {
    return <ErrorHandler message={errmsg} onHandleTry={handleReTry} />
  }


  const addtoCart = (idx) => {
    //console.log(idx);
    setCartItems((prev) => {
      const product = products[idx - 1];
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
    if (!cartOpen) {
      setCartOpen(true);
    }
  }

  const handleCartControl = () => {
    setCartOpen(true);
  }
  return (
    <>
      <Navbar onShowCart={handleCartControl} />
      <ProductListPresenter items={products} onhandleCart={addtoCart} />
      <CartContainer
        list={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  )
}

export default ProductListContainer
