import React, { useEffect, useState } from "react";

const CartContainer = ({ list, isOpen, onClose }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  useEffect(() => {
    const total = list.reduce((acc, item) => acc + item.qty * item.price, 0);
    setGrandTotal(total);
  }, [list]);


  if (!isOpen) return null;
  return (
    <div className="fixed inset-y-0 right-0 z-50 flex">
      <div className="w-80 sm:w-96 bg-white h-full shadow-lg p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            ✕
          </button>
        </div>


        <div className="flex-1 overflow-y-auto space-y-3">
          {list.length === 0 ? (
            <p className="text-gray-500">Cart is Empty!</p>
          ) : (
            list.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b pb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-gray-600 font-semibold text-sm">${item.price} | Quantity: {item.qty} | Total: {(item.price * item.qty).toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {list.length > 0 && (
          <div className="pt-4 border-t">
            <button className="w-full font-semibold bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Checkout (Total ${grandTotal.toFixed(2)})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
