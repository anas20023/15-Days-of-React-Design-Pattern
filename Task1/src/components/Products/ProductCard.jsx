const ProductCard = ({product,onhandleCart}) => {
    //console.log(product.image);
return (
    <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-sm border border-gray-200 rounded-xl shadow-md p-6 bg-white font-sans flex flex-col">
            <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain mx-auto rounded-lg mb-4"
            />
            <div className="text-lg font-semibold mb-2 text-center">
                {product.title}
            </div>
            <div className="text-gray-500 text-sm mb-2 text-center">
                {product.category}
            </div>
            <div className="text-base mb-4 line-clamp-3 text-center">
                {product.description}
            </div>
            <div className="flex items-center mb-2">
                <span className="font-semibold text-lg text-green-700">${product.price}</span>
                <span className="ml-auto text-sm text-orange-400">
                    ★ {product.rating?.rate} ({product.rating?.count})
                </span>
            </div>
            <button onClick={()=>onhandleCart(product.id)} className="w-full py-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded-md font-semibold text-base cursor-pointer mt-auto">
                Add to Cart
            </button>
        </div>
    </div>
)
}

export default ProductCard
