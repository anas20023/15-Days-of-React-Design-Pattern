const ProductCard = ({ children }) => {
    return (
        <div className="card_container flex flex-col w-full max-w-[400px] mx-auto rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            {children}
        </div>
    );
};

const CardHeader = ({ children }) => {
    return (
        <div className="card_header bg-gray-100 px-5 py-4 border-b border-gray-200">
            {children}
        </div>
    )
}
const CardBody = ({ children }) => {
    return (
        <div className="card_body flex flex-col p-5 gap-4">
            {children}
        </div>
    )
}
const CardImage = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
ProductCard.Header = CardHeader;
ProductCard.Body = CardBody;
ProductCard.CardImage=CardImage

export default ProductCard;

