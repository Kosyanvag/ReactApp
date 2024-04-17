import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Store from "./components/Store/Store";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Images from "./components/Images/Images";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<Store />}>
          <Route index element={<Posts />} />
          <Route path="/store/posts" element={<Posts />} />
          <Route path="/store/comments" element={<Comments />} />
          <Route path="/store/images" element={<Images />} />
          <Route path="./" element={<Welcome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
