import { CgProfile } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="fixed top-0 bg-orange-200 shadow-xl w-full min-h-16">
      <div className="container mx-auto">
        <div className="flex justify-between py-5">
          <div className="text-lg font-medium"></div>
          <CgProfile
            size={30}
            className="cursor-pointer"
            data-tooltip-id="profile-tooltip"
            data-tooltip-content="Profile"
            onClick={() => navigate("/profile")}
          />
          <Tooltip id="profile-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
