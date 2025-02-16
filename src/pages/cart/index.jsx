import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import AuthLayout from "../../components/layouts/Authenticate";
import { useSelector, useDispatch } from "react-redux";
import {
  updateCartQuantity,
  removeFromCart,
} from "../../utils/redux/Slice/usersSlice";
import CartTotal from "./TotalItems";

/*assets*/
import EmptyCart from "../../assets/Empty-cart.webp";
const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.users.cart);

  const handleCart = (item) => {
    const itemQuantity = items.find((i) => i.id === item.id).quantity;
    if (itemQuantity === 1 && item.type === "decrease") {
      console.log("yes enter here");
      dispatch(removeFromCart(item));
    } else {
      dispatch(updateCartQuantity(item));
    }
  };
  return (
    <AuthLayout>
      <div className="py-5">
        {items &&
          items.length >= 1 &&
          items.map((item, index) => {
            return (
              <div
                className="bg-white shadow-xl p-5 rounded-2xl my-2 border-2 border-orange-200 hover:border-blue-500"
                key={index}
              >
                <div className="flex gap-5">
                  <img
                    src={item.image}
                    alt="item-image"
                    className="h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="font-medium">{item.title}</p>
                    <p className="">{item.description}</p>
                    <p className="font-bold">${item.price}</p>
                    <p>
                      <span className="font-medium">Quantity: </span>
                      {item.quantity}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          handleCart({ id: item.id, type: "increase" })
                        }
                        className="border-2 rounded p-1 cursor-pointer text-blue-500"
                      >
                        <FaPlus size={15} />
                      </button>
                      {item.quantity}
                      <button
                        onClick={() =>
                          handleCart({ id: item.id, type: "decrease" })
                        }
                        className="border-2 rounded p-1 cursor-pointer text-blue-500"
                      >
                        <FaMinus size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {items.length <= 0 && (
          <div className="min-h-screen flex justify-center items-center rounded-2xl shadow-2xl">
            <div className="text-2xl font-bold text-center">
              <img src={EmptyCart} alt="empty-cart" />
              No items !!
            </div>
          </div>
        )}
        <CartTotal />
      </div>
    </AuthLayout>
  );
};

export default CartPage;
