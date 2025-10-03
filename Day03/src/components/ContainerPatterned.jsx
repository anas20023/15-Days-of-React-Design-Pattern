import CompoundPatternWay from "./Compund Pattern/CompoundPatternWay"

const ContainerPatterned = ({ title, body, category, brand, image, price, discount, rating, stock, primaryAction, secondaryAction }) => {
    return (
        <div className="flex flex-row">
            <CompoundPatternWay>
                <CompoundPatternWay.Header>
                    <div className="card_header bg-gray-100 px-5 py-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900 truncate">{title}</h2>
                            {discount && (
                                <span className="text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                                    {discount}% OFF
                                </span>
                            )}
                        </div>
                        {(category || brand) && (
                            <div className="flex gap-2 mt-1">
                                {category && (
                                    <span className="text-xs text-gray-500 uppercase">{category}</span>
                                )}
                                {brand && (
                                    <span className="text-xs text-gray-500 uppercase">{brand}</span>
                                )}
                            </div>
                        )}
                    </div>
                </CompoundPatternWay.Header>
                <CompoundPatternWay.Body>
                    <div className="card_body flex flex-col p-5 gap-4">
                        {/* Card Body */}
                        <div className="flex flex-col gap-3">
                            <CompoundPatternWay.CardImage>
                                {image && (
                                    <div className="w-full h-64 overflow-hidden rounded-lg">
                                        <img
                                            src={image}
                                            alt={title || "Product image"}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                )}
                            </CompoundPatternWay.CardImage>
                            <div className="flex flex-col gap-2">
                                <div className="text-gray-700 text-lg leading-relaxed">{body}</div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xl font-semibold text-gray-900">
                                            ${price.toFixed(2)}
                                        </span>
                                        {discount && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${(price / (1 - discount / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    {rating && (
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500">{'★'.repeat(Math.floor(rating))}</span>
                                            <span className="text-gray-500 text-sm">({rating})</span>
                                        </div>
                                    )}
                                </div>
                                {stock !== undefined && (
                                    <div className="text-sm text-gray-600">
                                        {stock > 0 ? `In Stock: ${stock} units` : 'Out of Stock'}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Card Body */}

                        {/* Card Footer */}
                        <div className="flex justify-end gap-3 mt-3">
                            {secondaryAction && (
                                <div className="flex items-center">
                                    {secondaryAction}
                                </div>
                            )}
                            {primaryAction && (
                                <div className="flex items-center">
                                    {primaryAction}
                                </div>
                            )}
                        </div>
                        {/* Card Footer */}
                    </div>
                </CompoundPatternWay.Body>
            </CompoundPatternWay>

            {/* Card WithOut Image */}
            <CompoundPatternWay>
                <CompoundPatternWay.Header>
                    <div className="card_header bg-gray-100 px-5 py-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-900 truncate">{title}</h2>
                            {discount && (
                                <span className="text-sm font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                                    {discount}% OFF
                                </span>
                            )}
                        </div>
                        {(category || brand) && (
                            <div className="flex gap-2 mt-1">
                                {category && (
                                    <span className="text-xs text-gray-500 uppercase">{category}</span>
                                )}
                                {brand && (
                                    <span className="text-xs text-gray-500 uppercase">{brand}</span>
                                )}
                            </div>
                        )}
                    </div>
                </CompoundPatternWay.Header>
                <CompoundPatternWay.Body>
                    <div className="card_body flex flex-col p-5 gap-4">
                        {/* Card Body */}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <div className="text-gray-700 text-lg leading-relaxed">{body}</div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xl font-semibold text-gray-900">
                                            ${price.toFixed(2)}
                                        </span>
                                        {discount && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${(price / (1 - discount / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    {rating && (
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500">{'★'.repeat(Math.floor(rating))}</span>
                                            <span className="text-gray-500 text-sm">({rating})</span>
                                        </div>
                                    )}
                                </div>
                                {stock !== undefined && (
                                    <div className="text-sm text-gray-600">
                                        {stock > 0 ? `In Stock: ${stock} units` : 'Out of Stock'}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Card Body */}

                        {/* Card Footer */}
                        <div className="flex justify-end gap-3 mt-3">
                            {secondaryAction && (
                                <div className="flex items-center">
                                    {secondaryAction}
                                </div>
                            )}
                            {primaryAction && (
                                <div className="flex items-center">
                                    {primaryAction}
                                </div>
                            )}
                        </div>
                        {/* Card Footer */}
                    </div>
                </CompoundPatternWay.Body>
            </CompoundPatternWay>
        </div>
    )
}

export default ContainerPatterned
