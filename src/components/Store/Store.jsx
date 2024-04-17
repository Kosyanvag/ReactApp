import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Nav from "../Nav/Nav";

const Store = () => {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section>
      <Nav />
    </section>
  );
};

export default Store;
