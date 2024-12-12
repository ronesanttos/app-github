import { FaSpinner } from "react-icons/fa";
import Style from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <FaSpinner className={Style.loader} />
    </>
  );
};

export default Loader;
