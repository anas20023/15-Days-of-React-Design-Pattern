import ProductListPresenter from "./ProductListPresenter"
import axios from "axios"
import { useState, useEffect } from "react"
import SpinLoader from "../Handlers/SpinLoader";
import ErrorHandler from "../Handlers/ErrorHandler";
const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  useEffect(() => {
    setLoader(true)
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      // console.log(res.data)
      setProducts(res.data);
      setLoader(false);
    } catch (e) {
      //console.log(e);
      setLoader(false);
      setError(true)
      setErrmsg(e.message)
    }
  }
  if (loader) {
    return <SpinLoader message={"Fetching Data from API"} />
  }
  if (error) {
    return <ErrorHandler message={errmsg} />
  }
  return (
    <>
      <ProductListPresenter items={products} />
    </>
  )
}

export default ProductListContainer
