import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  let navigate = useNavigate();
  const { user } = useAuth;
  console.log(user, "user")
  console.log(children, "children");
  return user ? children : navigate("login");
}
