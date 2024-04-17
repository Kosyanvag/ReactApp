import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/authenticationSlice";
import registerStyles from "./registerStyles.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initValues = {
    password: "",
    email: "",
  };
  const postData = async (values) => {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    return await response.json();
  };
  const handleSubmit = async (values, { resetForm }) => {
    const response = await fetch(
      `http://localhost:3000/register?username=${values.email}`
    );
    const data = await response.json();
    if (data.length > 0) {
      alert("User already exists");
    } else {
      await postData(values);
      resetForm();
      navigate("/login");
    }
  };
  return (
    <div className={registerStyles.registerPage}>
      <Formik onSubmit={handleSubmit} initialValues={initValues}>
        {({ values }) => {
          return (
            <Form>
              <div className={registerStyles.form}>
                <h2 className={registerStyles.formTitle}>Register</h2>
                <div className={registerStyles.formInputs}>
                  <Field
                    required
                    value={values.email}
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                  <Field
                    required
                    value={values.password}
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </div>
                <div className={registerStyles.btns}>
                  <Link className={registerStyles.back} to="/">
                    CANCEL
                  </Link>
                  <input
                    className={registerStyles.submit}
                    type="submit"
                    value="REGISTER"
                    onClick={() =>
                      dispatch(
                        register({
                          username: values.username,
                          password: values.password,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
