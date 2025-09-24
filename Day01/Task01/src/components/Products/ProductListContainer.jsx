import ProductListPresenter from "./ProductListPresenter"
import axios from 'axios'
import { useState, useEffect } from "react"
import SpinLoader from "../Handlers/SpinLoader";
import ErrorHandler from "../Handlers/ErrorHandler";
import CartContainer from "../Cart/CartContainer";
import Navbar from "../Navbar";
import SortingContainer from "./SortingContainer";
const ProductListContainer = () => {

  const [products, setProducts] = useState([]);
  const [productsDefault, setproductsDefault] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errmsg, setErrmsg] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [sortPrice, setSortPrice] = useState('df');
  const [sortRating, setSortRating] = useState('df');

  const fetchProducts = async () => {
    try {
      setLoader(true)
      const res = await axios.get("https://fakestoreapi.com/products")
      // console.log(res.data)
      setProducts(res.data);
      setproductsDefault(res.data);
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


  const addtoCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists
        ? prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
        : [...prev, { ...product, qty: 1 }];
    });
    if (!cartOpen) setCartOpen(true);
  };


  const handleCartControl = () => {
    setCartOpen(true);
  }

  const handleSort = (type, order) => {
    let sortedData = [...products];
    // console.log(order);

    if (type === 'price') {
      setSortPrice(order);
      if (order === 'asc') {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (order === 'dsc') {
        sortedData.sort((a, b) => b.price - a.price);
      } else {
        sortedData = [...productsDefault];
      }
    } else if (type === 'rating') {
      setSortRating(order);
      if (order === 'asc') {
        sortedData.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (order === 'dsc') {
        sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
      } else {
        //console.log("apeared here");
        sortedData = [...productsDefault];
      }
    }
    //console.log(sortedData);
    setProducts(sortedData);
  };

  const handleIncrease = (id) => {
    //console.log(id + "++");
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (!exists) return prev;

      return prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
    });
  }
  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };


  return (
    <>
      <Navbar onShowCart={handleCartControl} />
      <SortingContainer sortPrice={sortPrice} sortRating={sortRating} handleSort={handleSort} />
      <ProductListPresenter items={products} onhandleCart={addtoCart} />
      <CartContainer
        list={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </>
  )
}

export default ProductListContainer
