import AuthLayout from "../../components/layouts/Authenticate";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader";

/*redux*/
import { useSelector, useDispatch } from "react-redux";
import { userCart } from "../../utils/redux/Slice/usersSlice";

const ElectronicsPage = () => {
  let dispatch = useDispatch();

  const notify = () =>
    toast.success("Product Added Successfully!!", {
      position: "top-center",
    });

  const addToCart = (product) => {
    dispatch(userCart({ ...product, quantity: 1 }));
    notify();
  };
  const products = useSelector((state) => state.products.electronicsItems);
  return (
    <AuthLayout>
      <div className="min-h-screen">
        {products && products.length > 0 && (
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white flex flex-col justify-between shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <p className="text-xl font-bold text-blue-500 mt-2">
                      ${product.price}
                    </p>

                    <button
                      onClick={() => addToCart(product)}
                      className="mt-4 w-full flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <FaShoppingCart className="mr-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div>{products.length <= 0 && <Loader fullScreen />}</div>
      </div>
    </AuthLayout>
  );
};

export default ElectronicsPage;
