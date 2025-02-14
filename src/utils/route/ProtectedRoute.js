import { redirect, replace, useNavigate } from "react-router";
import { getCookie } from "../cookie/cookies";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  let navigate = useNavigate();
  const token = getCookie("token");
  return token
    ? children
    : useEffect(() => {
        navigate("/login");
      }, []);
}
