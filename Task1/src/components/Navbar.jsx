const Navbar = ({cart}) => {
return (
    <div className="bg-blue-500 flex flex-row justify-center items-center text-white w-full">
        <nav className="px-2 py-4 flex flex-row justify-between items-baseline-last gap-10">
            <h2 className="text-2xl font-bold">Product List</h2>
            <div className="text-2xl font-semibold">Cart: {cart}</div>
        </nav>
    </div>
)
}

export default Navbar
