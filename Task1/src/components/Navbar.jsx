import { ShoppingCart } from "lucide-react"; 
const Navbar = ({ onShowCart }) => {

  return (
    <nav className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center gap-4">
            <button
              onClick={onShowCart}
              className="flex cursor-pointer items-center bg-blue-800 hover:bg-blue-700 px-3 py-2 rounded-lg transition"
            >
              <ShoppingCart size={20} className="mr-2" />
              Show Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
