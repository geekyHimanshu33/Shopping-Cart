// import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart} = useSelector((state) => state)
  return (
    <div className="shadow-2xl overflow-x-hidden   bg-white ">
      <div className="w-1/2 mx-auto flex justify-between items-center py-3 px-3">
        <div className="mr-14">
          <Link to="/">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/12/Ajio-Logo-500x281.png"
              alt=""
              width="100px"
              height="50px"
            ></img>
          </Link>
        </div>

        <div className="flex gap-x-6 items-center">
          <Link to="/">
            <button
              className="text-[20px] font-semibold text-gray-600 hover:text-black
           transition-all duration-200"
            >
              Home
            </button>
          </Link>

          <Link to="/cart">
            <button
              className="text-[28px] text-gray-600 hover:text-black
           transition-all duration-200 relative"
            >
              <HiShoppingCart />
              <div className={`yoyo absolute right-[-.85rem] top-[-.6rem] w-4 h-4 rounded-full flex items-center justify-center text-[0.8rem] text-white p-3 bg-gray-800 ${cart.length === 0 ? "opacity-0" : ("opacity-1")}`}>
                {cart.length}
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
