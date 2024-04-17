import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authenticationSlice";
import navStyles from "./navStyles.module.css";
const Nav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
    console.log("logout");
  };
  return (
    <>
      <nav>
        <Link to="/store">Logo</Link>
        <ul className={navStyles.links}>
          <Link to="/store/posts">Posts</Link>
          <Link to="/store/comments">Comments</Link>
          <Link to="/store/images">Images</Link>
        </ul>
        {isLoggedIn && (
          <Link onClick={handleLogout} to="/" className="logout">
            Logout
          </Link>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
