import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authenticationSlice";
import { useNavigate, Link } from "react-router-dom";
import loginStyles from "./loginStyles.module.css";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("../../public/db.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const user = data.register.find(
          (user) =>
            user.email === email &&
            user.password === password &&
            email !== "" &&
            password !== ""
        );
        if (!user) {
          throw alert("Email or password is incorrect");
        }
        dispatch(login({ email, token: "token" }));
        navigate("/store");
      });
  };

  return (
    <div className={loginStyles.loginPage}>
      <div className={loginStyles.form}>
        <h2 className={loginStyles.formTitle}>Login</h2>
        <div className={loginStyles.formInputs}>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Login"
          />
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className={loginStyles.btns}>
          <Link className={loginStyles.back} to="/">
            CANCEL
          </Link>
          <input
            type="submit"
            className={loginStyles.submit}
            onClick={handleLogin}
            value="LOGIN"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
