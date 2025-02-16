import { lazy, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

/* Components */
import AuthLayout from "../../components/layouts/Authenticate";
const ProductList = lazy(() => import("../../components/products/List"));
import Slider from "../../components/ui/Slider";
import Loader from "../../components/ui/Loader";

/* Redux Actions */
import {
  setProducts,
  setElectronicsItems,
  setJeweleryItems,
  setMensClothsItems,
  setWomensClothsItems,
} from "../../utils/redux/Slice/productsSlice";

/* Images */
import Electronics from "../../assets/Home-Appliances.jpg";
import Jwellery from "../../assets/jwellery.jpg";
import MenCloths from "../../assets/Mens-clothing.jpg";
import WomanCloths from "../../assets/Woman-clothing.jpg";

const DashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);

  /* Fetch All Products */
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchAllProducts();
  }, [dispatch]);

  /* Fetch Products by Category */
  const fetchProductsByCategory = async (category) => {
    try {
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      if (status === 200) {
        switch (category) {
          case "electronics":
            dispatch(setElectronicsItems(data));
            navigate("/category/electronics");
            break;
          case "jewelery":
            dispatch(setJeweleryItems(data));
            navigate("/category/jewelery");
            break;
          case "men's clothing":
            dispatch(setMensClothsItems(data));
            navigate("/category/mens-cloths");
            break;
          case "women's clothing":
            dispatch(setWomensClothsItems(data));
            navigate("/category/womens-cloths");
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error(`Error fetching ${category} products:`, error);
    }
  };

  /* Slider Configuration */
  const slides = [
    { image: Electronics, alt: "Electronics", type: "electronics" },
    { image: Jwellery, alt: "Jewelery", type: "jewelery" },
    { image: MenCloths, alt: "Men's Clothing", type: "men's clothing" },
    { image: WomanCloths, alt: "Women's Clothing", type: "women's clothing" },
  ];

  const sliderOptions = {
    perPage: 4,
    autoPlay: true,
    arrows: false,
    gap: "15px",
    mediaQuery: "min",
    breakpoints: {
      640: {
        perPage: 4,
        arrows: false,
      },
    },
  };

  return (
    <AuthLayout>
      <div className="py-5">
        <Slider
          slides={slides}
          options={sliderOptions}
          setCategory={fetchProductsByCategory}
        />
      </div>
      {items.items && items.items.length > 0 && <ProductList data={items} />}
      {items.items.length <= 0 && <Loader fullScreen />}
    </AuthLayout>
  );
};

export default DashboardPage;
