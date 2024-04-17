import { Link, Outlet } from "react-router-dom";
import welcome from "./welcome.module.css";
import "../../App.scss";
const Welcome = () => {
  return (
    <div className={welcome.welcome}>
      <div className={welcome.welcome__content}>
        <h1 className={welcome.title}>Welcome to Dumb data fetch app</h1>
        <div className={welcome.button}>
          <Link className={welcome.btn} to="/login">
            Login
          </Link>
          <Link className={welcome.btn} to="/register">
            Register
          </Link>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
