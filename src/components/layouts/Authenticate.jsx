import Navbar from "../header";
import Footer from "../footer";
const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16 container mx-auto px-5">{children}</div>
      <Footer />
    </>
  );
};

export default AuthLayout;
