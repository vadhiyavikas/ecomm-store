import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userCart } from "../../utils/redux/Slice/usersSlice";
const ProductList = ({ data }) => {
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Product Added Successfully!!", {
      position: "top-center",
    });
  const handleCart = (item) => {
    dispatch(userCart({ ...item, quantity: 1 }));
    notify();
  };
  return (
    <div className="py-5 grid lg:grid-cols-3 gap-3">
      {data.items &&
        data.items.map((d, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div className="flex justify-center p-4">
                <img
                  src={d.image}
                  width={150}
                  alt="Product Image"
                  className=""
                />
              </div>

              <div className="p-4 flex flex-col justify-between gap-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {d.title}
                </h3>

                <p className="text-sm text-gray-500 truncate">
                  {d.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">
                    ${d.price}
                  </span>
                  <span className="text-yellow-500 flex items-center">
                    ⭐ {d.rating?.rate}
                  </span>
                </div>

                <button
                  onClick={() => handleCart(d)}
                  className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
