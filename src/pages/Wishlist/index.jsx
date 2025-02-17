import AuthLayout from "../../components/layouts/Authenticate";
import ProductCard from "../../components/ui/ProductCard";

/*redux*/
import { useSelector } from "react-redux";
import { selectWishlist } from "../../utils/redux/Slice/usersSlice";

const WishlistPage = () => {
  const wishlist = useSelector(selectWishlist);
  const addToCart = () => {
    console.log("yes enter");
  };
  return (
    <AuthLayout>
      <div className="min-h-screen py-5">
        {/* <div className="p-6"> */}
        <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
        {/* </div> */}
      </div>
    </AuthLayout>
  );
};

export default WishlistPage;
