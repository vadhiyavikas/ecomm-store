import { useEffect } from "react";
import AuthLayout from "../../components/layouts/Authenticate";
import axios from "axios";
const CartPage = () => {
  const fetchCart = async () => {
    const response = await axios.get("https://fakestoreapi.com/carts/user/1");
  };

  useEffect(() => {
    fetchCart();
  }, []);
  return <AuthLayout>This is cart page.</AuthLayout>;
};

export default CartPage;
