import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import AuthLayout from "../../components/layouts/Authenticate";
import { removeCookie, getCookie } from "../../utils/cookie/cookies";
const ProfilePage = () => {
  let navigate = useNavigate();
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
    <AuthLayout>
      <div className="py-10">
        <div className="bg-white shadow-2xl rounded-2xl w-full min-h-screen flex flex-col p-10">
          <div className="flex justify-between items-center">
            <p className="text-center text-3xl font-bold">Profile</p>
            <IoIosLogOut
              size={30}
              className="cursor-pointer"
              data-tooltip-id="logout-tooltip"
              data-tooltip-content="Logout"
              onClick={() => handleLogout()}
            />
            <Tooltip id="logout-tooltip" />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProfilePage;
