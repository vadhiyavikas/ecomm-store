import { ClipLoader, HashLoader } from "react-spinners";

const Loader = ({ size = 50, color = "#3B82F6", fullScreen = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        fullScreen ? "h-screen w-full" : "py-5"
      }`}
    >
      <HashLoader color={color} size={size} />
    </div>
  );
};

export default Loader;
