import AuthLayout from "../../components/layouts/Authenticate";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader";
import ProductCard from "../../components/ui/ProductCard";

/*redux*/
import { useSelector, useDispatch } from "react-redux";
import { userCart } from "../../utils/redux/Slice/usersSlice";

const MensClothsPage = () => {
  const products = useSelector((state) => state.products.mensClothsItems);

  let dispatch = useDispatch();

  const notify = () =>
    toast.success("Product Added Successfully!!", {
      position: "top-center",
    });

  const addToCart = (product) => {
    dispatch(userCart({ ...product, quantity: 1 }));
    notify();
  };
  return (
    <AuthLayout>
      <div className="min-h-screen">
        {products && products.length > 0 && (
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}
        {products.length <= 0 && <Loader fullScreen />}
      </div>
    </AuthLayout>
  );
};

export default MensClothsPage;
