import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="fixed top-0 bg-orange-200 shadow-xl w-full min-h-16">
      <div className="container mx-auto">
        <div className="flex justify-between py-5">
          <div
            className="text-xl font-bold text-blue-500 flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <FaShopify size={30} />
            EcommStore
          </div>
          <div className="flex gap-3">
            <CgProfile
              size={30}
              className="cursor-pointer text-blue-500"
              data-tooltip-id="profile-tooltip"
              data-tooltip-content="Profile"
              onClick={() => navigate("/profile")}
            />
            <Tooltip id="profile-tooltip" />
            <div>
              <BsCart4
                size={30}
                data-tooltip-id="cart-tooltip"
                data-tooltip-content="Cart"
                onClick={() => navigate("/cart")}
                className="relative text-blue-500 cursor-pointer"
              />
              <Tooltip id="cart-tooltip" />
              <span className="bg-blue-500 text-white absolute text-sm min-w-5 min-h-5 rounded-full text-center top-[12px] right-[70px]">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
