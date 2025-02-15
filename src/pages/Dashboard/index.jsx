import AuthLayout from "../../components/layouts/Authenticate";
import ProductList from "../../components/products/List";
import { useEffect } from "react";
import axios from "axios";
import Slider from "../../components/ui/Slider";

/*redux*/
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../utils/redux/Slice/productsSlice";

/*images*/
import Electronics from "../../assets/Home-Appliances.jpg";
import Jwellery from "../../assets/jwellery.jpg";
import MenCloths from "../../assets/Mens-clothing.jpg";
import WomanCloths from "../../assets/Woman-clothing.jpg";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products);

  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status === 200) {
      dispatch(setProducts(response.data));
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const slides = [
    { image: Electronics, alt: "Image 1" },
    { image: Jwellery, alt: "Image 2" },
    { image: MenCloths, alt: "Image 3" },
    { image: WomanCloths, alt: "Image 4" },
  ];

  const options = {
    perPage: 4,
    autoPlay: true,
    arrows: false,
    gap: "15px"
  };
  return (
    <AuthLayout>
      <div className="py-5">
        <Slider slides={slides} options={options} />
      </div>
      <ProductList data={items} />
    </AuthLayout>
  );
};

export default DashboardPage;
