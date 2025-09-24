import SortingPresenter from "./SortingPresenter";
const SortingContainer = ({sortPrice,sortRating , handleSort}) => {
    return (
        <SortingPresenter sortPrice={sortPrice} sortRating={sortRating} handleSort={handleSort} />
    )
}
export default SortingContainer
