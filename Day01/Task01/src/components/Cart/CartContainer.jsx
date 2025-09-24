import { useEffect, useState } from "react";
import CartPresenter from "./CartPresenter";

const CartContainer = ({ list, isOpen, onClose,onIncrease,onDecrease }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    const total = list.reduce((acc, item) => acc + item.qty * item.price, 0);
    setGrandTotal(total);
  }, [list]);

  if (!isOpen) return null;
  return (
    <CartPresenter list={list} grandTotal={grandTotal} handleClose={onClose} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CartContainer;
