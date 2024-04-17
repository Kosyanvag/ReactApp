import { useEffect, useState } from "react";
import postStyles from "./postStyles.module.css";
import Loader from "../Loader/Loader";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);
  if (!posts.length) return <Loader />;
  return (
    <main>
      {posts
        ? posts.slice(0, 20).map((elem) => (
            <div className={postStyles.posts} key={elem.id}>
              <h2>{elem.title.slice(0, 15)}</h2>

              <p>{elem.body.slice(0, 15)}</p>
            </div>
          ))
        : ""}
    </main>
  );
};

export default Posts;
