import CartCard from '../Cart/CartCard'
const CartPresenter = ({list,grandTotal,handleClose}) => {
    return (
        <div className="fixed inset-y-0 right-0 z-50 flex">
            <div className="w-80 sm:w-96 bg-white h-full shadow-lg p-4 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Your Cart</h2>
                    <button
                        onClick={handleClose}
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
                            <CartCard item={item} key={index} />
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
    )
}

export default CartPresenter
