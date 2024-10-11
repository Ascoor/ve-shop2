import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/slices/authSlice";
import { AiOutlineLogout } from "react-icons/ai";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <button onClick={handleLogout} className="text-red-600">
      <AiOutlineLogout size={30} className="mr-1 text-xl" /> تسجيل الخروج
    </button>
  );
};

export default Logout;
