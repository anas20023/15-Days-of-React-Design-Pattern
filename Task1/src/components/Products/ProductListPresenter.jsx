import ProductCard from "./ProductCard"

const ProductListPresenter = ({items}) => {

return (
    <div className="flex flex-row justify-center items-center flex-wrap">
        {
            items.map((item, idx) => (
                <ProductCard product={item} key={idx} />
            ))
        }
    </div>
)
}

export default ProductListPresenter
