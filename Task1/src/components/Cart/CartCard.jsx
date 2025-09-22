const CartCard = ({ item }) => {
    return (
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
                <p className="text-gray-600 font-semibold text-sm">${item.price} | Quantity: {item.qty} | Total: {(item.price * item.qty).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartCard
