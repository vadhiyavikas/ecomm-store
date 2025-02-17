import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { FaShopify, FaHeart } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  let navigate = useNavigate();
  const cartItems = useSelector((state) => state.users.cart);
  return (
    <div className="fixed top-0 bg-orange-200 shadow-xl w-full min-h-16 z-10">
      <div className="container mx-auto px-5">
        <div className="flex justify-between py-5">
          <div
            className="text-xl font-bold text-blue-500 flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <FaShopify size={30} />
            EcommStore
          </div>
          <div className="flex gap-3 items-center">
            <CgProfile
              size={30}
              className="cursor-pointer text-blue-500"
              data-tooltip-id="profile-tooltip"
              data-tooltip-content="Profile"
              onClick={() => navigate("/profile")}
            />
            <Tooltip id="profile-tooltip" />
            <div className="relative">
              <BsCart4
                size={30}
                data-tooltip-id="cart-tooltip"
                data-tooltip-content="Cart"
                onClick={() => navigate("/cart")}
                className=" text-blue-500 cursor-pointer"
              />
              <Tooltip id="cart-tooltip" />
              {cartItems && cartItems.length >= 1 && (
                <span className="bg-blue-500 text-white absolute text-sm w-5 h-5 rounded-full text-center -top-2 -right-2 flex items-center justify-center">
                  {cartItems?.length}
                </span>
              )}
            </div>
            <FaHeart
              size={25}
              className="text-blue-500"
              onClick={() => navigate("/wishlist")}
              data-tooltip-id="wishlist-tooltip"
              data-tooltip-content="Wishlist"
            />
            <Tooltip id="wishlist-tooltip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
