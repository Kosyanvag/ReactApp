import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import commentStyles from "./commentStyles.module.css";
const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, []);

  if (!comments.length) return <Loader />;
  return (
    <main>
      {comments ? (
        comments.slice(0, 20).map((elem) => (
          <div className={commentStyles.comments} key={elem.id}>
            <h2>{elem.name.slice(0, 15)}</h2>
            <p>{elem.body.slice(0, 15)}</p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Comments;
