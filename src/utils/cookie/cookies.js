import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options = {}) => {
  const expires = new Date(Date.now() + 30 * 60 * 1000); // 10 minutes from now
  cookies.set(name, value, { path: "/", expires, ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  cookies.remove(name, { path: "/" });
};
