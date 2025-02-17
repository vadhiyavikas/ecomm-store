import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import AuthLayout from "../../components/layouts/Authenticate";
import { removeCookie, getCookie } from "../../utils/cookie/cookies";
import OrderHistory from "../Order/OrderHistory";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const { profile, orders } = useSelector((state) => state.users);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      removeCookie("token");
      navigate("/login");
    }
  };

  return (
    <AuthLayout>
      <div className="py-10 flex justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6">
          {/* Header Section */}
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-2xl font-bold">My Account</h2>
            <IoIosLogOut
              size={30}
              className="cursor-pointer text-red-500 hover:text-red-700"
              data-tooltip-id="logout-tooltip"
              data-tooltip-content="Logout"
              onClick={handleLogout}
            />
            <Tooltip id="logout-tooltip" />
          </div>

          {/* Tabs */}
          <div className="flex mt-4 border-b">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 text-lg font-medium ${
                activeTab === "profile"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`px-4 py-2 text-lg font-medium ${
                activeTab === "orders"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Orders
            </button>
          </div>

          {/* Profile Tab Content */}
          {activeTab === "profile" && (
            <div className="mt-5 space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full border shadow-md"
                />
                <div>
                  <p className="text-xl font-bold">
                    {profile?.name?.firstname} {profile?.name?.lastname}
                  </p>
                  <p className="text-gray-600">{profile?.email}</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg">
                  <span className="font-semibold">Username:</span>{" "}
                  {profile?.username}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Phone:</span> {profile?.phone}
                </p>
              </div>
            </div>
          )}

          {/* Orders Tab Content */}
          {activeTab === "orders" && (
            <div className="mt-5">
              <OrderHistory orders={orders} />
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default ProfilePage;
