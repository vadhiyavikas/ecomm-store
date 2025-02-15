import AuthLayout from "../../components/layouts/Authenticate";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../utils/redux/Slice/productsSlice";
import ProductList from "../../components/products/List";
import { useEffect } from "react";
import axios from "axios";
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
  return (
    <AuthLayout>
      <ProductList data={items}/>
    </AuthLayout>
  );
};

export default DashboardPage;
