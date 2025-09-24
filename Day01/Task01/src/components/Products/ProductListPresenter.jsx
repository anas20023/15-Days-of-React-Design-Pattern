import ProductCard from "./ProductCard"

const ProductListPresenter = ({items,onhandleCart}) => {
    const handleCart=(idx)=>{
       // console.log(e)
       onhandleCart(idx)
    }

return (
    <div className="flex flex-row justify-center items-center flex-wrap">
        {
            items.map((item, idx) => (
                <ProductCard product={item} key={idx} onhandleCart={handleCart} />
            ))
        }
    </div>
)
}

export default ProductListPresenter
