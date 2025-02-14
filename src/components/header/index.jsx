import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import { removeCookie, getCookie } from "../../utils/cookie/cookies";
import { useState } from "react";

const Navbar = () => {
  let navigate = useNavigate();
  const [isProfile, setIsProfile] = useState(false);
  const handleGetCookies = () => {
    const res = getCookie("token");
    if (!res) {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    removeCookie("token");
    handleGetCookies();
  };

  return (
    <div className="fixed top-0 bg-orange-200 shadow-xl w-full min-h-16">
      <div className="container mx-auto">
        <div className="flex justify-between py-5">
          <p className="text-lg font-medium">This is navbar</p>
          <CgProfile
            size={30}
            className="cursor-pointer"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content="Profile"
            onClick={() => navigate('/profile')}
          />
          {/* <IoIosLogOut
            size={30}
            className="cursor-pointer"
            data-tooltip-id="logout-tooltip"
            data-tooltip-content="Logout"
            onClick={() => handleLogout()}
          /> */}
          <Tooltip id="profile-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
