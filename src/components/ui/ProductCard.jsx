import { FaShoppingCart, FaHeart } from "react-icons/fa";

/*redux*/
import { useSelector, useDispatch } from "react-redux";
import {
  toggleWishlist,
  selectWishlist,
} from "../../utils/redux/Slice/usersSlice";

const ProductCard = ({ product, addToCart }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);

  // Check if the product is in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="bg-white flex flex-col justify-between shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300 relative">
      {/* Wishlist Button */}
      <button
        onClick={() => dispatch(toggleWishlist(product))}
        className="absolute top-3 right-3 text-xl"
      >
        <FaHeart className={isInWishlist ? "text-red-500" : "text-white"} />
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-xl font-bold text-blue-500 mt-2">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
