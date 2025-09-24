import React from 'react';

const CartCard = ({ item, onIncrease, onDecrease }) => {
   // console.log(item);
    if(item.qty <=0) return null
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-2 px-2">
                <button
                    onClick={() => onDecrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                >
                    -
                </button>
                <p>{item.qty}</p>
                <button
                    onClick={() => onIncrease(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                >
                    +
                </button>
            </div>
            <div
                className="flex items-center gap-3 border-b pb-2"
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-gray-600 font-semibold text-sm">${item.price} | Total: ${(item.price * item.qty).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default CartCard