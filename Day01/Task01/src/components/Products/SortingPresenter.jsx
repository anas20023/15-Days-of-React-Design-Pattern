const SortingPresenter = ({ sortPrice, sortRating, handleSort }) => {
    return (
        <div className="my-2 px-2 flex flex-row justify-center item-center gap-4 w-full max-w-lg">
            <select
                className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={sortPrice}
                onChange={(e) => handleSort('price', e.target.value)}
            >
                <option value="df">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="dsc">High to low</option>
            </select>
            <select
                className="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={sortRating}
                onChange={(e) => handleSort('rating', e.target.value)}
            >
                <option value="df">Sort by Rating</option>
                <option value="asc">Low to High</option>
                <option value="dsc">High to low</option>
            </select>

        </div>
    )
}

export default SortingPresenter
