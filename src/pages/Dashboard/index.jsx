import AuthLayout from "../../components/layouts/Authenticate";
import { useSelector } from "react-redux";
const DashboardPage = () => {
  const response = useSelector((state) => state)
  console.log(response, "response");
  return <AuthLayout>This is dashboard</AuthLayout>;
};

export default DashboardPage;
