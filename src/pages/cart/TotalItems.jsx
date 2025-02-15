import { useSelector } from "react-redux";
import { selectCartTotal } from "../../utils/redux/Slice/usersSlice"; // Adjust the path if needed
import { useNavigate } from "react-router";

const CartTotal = () => {
  let navigate = useNavigate();
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full  mx-auto mt-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">Cart Summary</h2>

      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-lg font-medium text-gray-600">Total Price:</span>
        <span className="text-xl font-bold text-green-600">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="cursor-pointer mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
