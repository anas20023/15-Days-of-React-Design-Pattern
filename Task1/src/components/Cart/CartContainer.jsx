import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import CartPresenter from "./CartPresenter";

const CartContainer = ({ list, isOpen, onClose }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    const total = list.reduce((acc, item) => acc + item.qty * item.price, 0);
    setGrandTotal(total);
  }, [list]);


  if (!isOpen) return null;
  return (
    <CartPresenter list={list} grandTotal={grandTotal} handleClose={onClose} />
  );
};

export default CartContainer;
