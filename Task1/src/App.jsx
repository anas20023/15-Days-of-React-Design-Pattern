import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductListContainer from "./components/Products/ProductListContainer";

const App=()=> {
  const [cart,setCart]=useState(0);

  return (
    <section className="flex flex-col justify-between items-center">
     <Navbar cart={cart}/>
     <ProductListContainer/>
    </section>
  )
}

export default App
